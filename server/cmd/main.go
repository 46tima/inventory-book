package main

import (
	"database/sql"
	"encoding/json"
	"net/http"

	_ "github.com/lib/pq"
)

var db *sql.DB

type Computer struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Room int    `json:"room"`
}

func enableCors(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
}

func computersHandler(w http.ResponseWriter, r *http.Request) {
	enableCors(w)
	w.Header().Set("Content-Type", "application/json")

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method == http.MethodGet {
		getComputers(w, r)
		return
	}

	if r.Method == http.MethodPost {
		createComputer(w, r)
		return
	}

	http.Error(w, "Метод не разрешен", http.StatusMethodNotAllowed)
}

func getComputers(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT id, name, room FROM computers ORDER BY id")
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}
	defer rows.Close()

	var computers []Computer

	for rows.Next() {
		var computer Computer

		err := rows.Scan(&computer.ID, &computer.Name, &computer.Room)
		if err != nil {
			http.Error(w, err.Error(), 500)
			return
		}

		computers = append(computers, computer)
	}

	json.NewEncoder(w).Encode(computers)
}

func createComputer(w http.ResponseWriter, r *http.Request) {
	var computer Computer

	err := json.NewDecoder(r.Body).Decode(&computer)
	if err != nil {
		http.Error(w, "Неверный JSON", 400)
		return
	}

	err = db.QueryRow(
		"INSERT INTO computers (name, room) VALUES ($1, $2) RETURNING id",
		computer.Name,
		computer.Room,
	).Scan(&computer.ID)

	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(computer)
}

func main() {
	var err error

	db, err = sql.Open("postgres",
		"host=192.168.2.101 port=5432 user=postgres password=postgres dbname=school_inventory sslmode=disable")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	http.HandleFunc("/computers", computersHandler)

	http.ListenAndServe(":8080", nil)
}
