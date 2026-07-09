Отлично. Делаем **React + TypeScript с нуля** нормальным курсом, не “посмотрел 10 видео и забыл”, а чтобы ты реально мог писать фронтенд для своих проектов: инвентаризация, расписание, админка, API, личные сервисы.

React — это библиотека для создания интерфейса из компонентов, то есть маленьких частей страницы: кнопка, карточка, форма, таблица, меню. ([react.dev](https://react.dev/?utm_source=chatgpt.com "React")) TypeScript добавляет типы, чтобы меньше ловить ошибки в браузере и лучше понимать, какие данные идут в компонент, state, props и API. ([react.dev](https://react.dev/learn/typescript?utm_source=chatgpt.com "Using TypeScript")) Для старта будем использовать **Vite + React + TypeScript**, потому что React-документация рекомендует начинать проект через современный build tool вроде Vite, Parcel или Rsbuild. ([react.dev](https://react.dev/learn/build-a-react-app-from-scratch?utm_source=chatgpt.com "Build a React app from Scratch"))

# React + TypeScript: полный курс для начинающих

## Что будем делать в итоге

Финальный проект: **мини-система “Список компьютеров”**

Функции:

```text
- список ПК
- добавление ПК
- редактирование ПК
- удаление ПК
- поиск
- фильтр по кабинету
- работа с REST API
- загрузка / ошибка / пустой список
- простая авторизация
- красивый интерфейс
```

То есть не абстрактные “счётчики”, а то, что тебе как IT-специалисту реально пригодится.

---

# План на 30 дней

## Блок 1. База React

### День 1. Установка и первый проект

Темы:

```text
- что такое React
- что такое компонент
- что такое JSX / TSX
- создание проекта через Vite
- структура проекта
- запуск dev-сервера
```

Команда:

```bash
npm create vite@latest my-react-app
```

Выбираешь:

```text
React
TypeScript
```

Потом:

```bash
cd my-react-app
npm install
npm run dev
```

---

### День 2. Компоненты

Темы:

```text
- App.tsx
- создание своих компонентов
- export / import
- зачем разбивать страницу на части
```

Пример:

```tsx
function Header() {
  return <h1>Список компьютеров</h1>
}

export default Header
```

---

### День 3. JSX / TSX

Темы:

```text
- как писать HTML внутри TypeScript
- className вместо class
- фигурные скобки {}
- вывод переменных
```

Пример:

```tsx
const name = "Timur"

function App() {
  return <h1>Привет, {name}</h1>
}
```

---

### День 4. Props

Темы:

```text
- что такое props
- передача данных в компонент
- типизация props
```

Пример:

```tsx
type ComputerCardProps = {
  name: string
  room: string
}

function ComputerCard({ name, room }: ComputerCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Кабинет: {room}</p>
    </div>
  )
}
```

---

### День 5. useState

Темы:

```text
- состояние компонента
- изменение данных на странице
- кнопки
- input
```

Пример:

```tsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Нажато: {count}
    </button>
  )
}
```

---

### День 6. Списки

Темы:

```text
- массивы
- map
- key
- вывод списка компьютеров
```

Пример:

```tsx
const computers = [
  { id: 1, name: "PC-101", room: "101" },
  { id: 2, name: "PC-102", room: "102" },
]

function ComputerList() {
  return (
    <div>
      {computers.map((computer) => (
        <p key={computer.id}>
          {computer.name} — {computer.room}
        </p>
      ))}
    </div>
  )
}
```

---

### День 7. Повторение + мини-проект

Мини-проект:

```text
Страница со списком ПК:
- заголовок
- карточки ПК
- кабинет
- статус: работает / не работает
```

---

## Блок 2. TypeScript в React

### День 8. Типы в компонентах

Темы:

```text
- string
- number
- boolean
- type
- interface
- props
```

Пример:

```tsx
type Computer = {
  id: number
  name: string
  room: string
  isWorking: boolean
}
```

---

### День 9. Типизация useState

Темы:

```text
- useState<string>
- useState<number>
- useState<boolean>
- useState<Computer[]>
```

Пример:

```tsx
const [computers, setComputers] = useState<Computer[]>([])
```

---

### День 10. Events

Темы:

```text
- onClick
- onChange
- FormEvent
- ChangeEvent
```

Пример:

```tsx
function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value)
}
```

---

### День 11. Формы

Темы:

```text
- controlled input
- submit формы
- добавление нового ПК
```

Пример:

```tsx
function handleSubmit(event: React.FormEvent) {
  event.preventDefault()
}
```

---

### День 12. Условный рендеринг

Темы:

```text
- if
- ternary
- && 
- показывать разные блоки
```

Пример:

```tsx
{isLoading ? <p>Загрузка...</p> : <ComputerList />}
```

---

### День 13. Children

Темы:

```text
- что такое children
- универсальная карточка
- layout-компоненты
```

Пример:

```tsx
type CardProps = {
  children: React.ReactNode
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>
}
```

---

### День 14. Практика

Мини-проект:

```text
Форма добавления компьютера:
- название
- кабинет
- статус
- кнопка добавить
- вывод списка
```

---

## Блок 3. Архитектура React-приложения

### День 15. Структура проекта

Темы:

```text
src/
  components/
  pages/
  types/
  api/
  hooks/
```

Нормальная структура:

```text
src/
  components/
    ComputerCard.tsx
    ComputerForm.tsx
  pages/
    ComputersPage.tsx
  types/
    computer.ts
  App.tsx
```

---

### День 16. Разделение компонентов

Темы:

```text
- “толстый” App.tsx — плохо
- вынос компонентов
- читаемый код
```

---

### День 17. CSS

Темы:

```text
- обычный CSS
- CSS modules
- className
- базовая верстка
```

---

### День 18. Tailwind CSS

Темы:

```text
- зачем Tailwind
- установка
- классы
- карточки, кнопки, формы
```

---

### День 19. React Router

Темы:

```text
- страницы
- маршруты
- BrowserRouter
- Link
- useParams
```

Страницы:

```text
/
/computers
/computers/:id
/about
```

---

### День 20. Layout

Темы:

```text
- общий Header
- Sidebar
- Outlet
- layout для админки
```

---

### День 21. Практика

Мини-проект:

```text
Админка:
- главная страница
- страница компьютеров
- страница кабинетов
- навигация
```

---

## Блок 4. Работа с API

### День 22. Что такое API во фронтенде

Ты уже учил REST API в Go, поэтому здесь будет проще.

React делает запрос:

```text
GET /computers
```

Backend отдаёт JSON:

```json
[
  {
    "id": 1,
    "name": "Computer 1",
    "room": "101"
  }
]
```

React показывает это на странице.

---

### День 23. fetch

Темы:

```text
- GET запрос
- async / await
- useEffect
- loading
- error
```

Пример:

```tsx
useEffect(() => {
  async function loadComputers() {
    const response = await fetch("http://localhost:8080/computers")
    const data: Computer[] = await response.json()
    setComputers(data)
  }

  loadComputers()
}, [])
```

---

### День 24. POST

Темы:

```text
- отправка формы на backend
- JSON.stringify
- headers
```

Пример:

```tsx
await fetch("http://localhost:8080/computers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newComputer),
})
```

---

### День 25. PUT / PATCH

Темы:

```text
- редактирование ПК
- обновление данных
- форма редактирования
```

---

### День 26. DELETE

Темы:

```text
- удаление ПК
- подтверждение удаления
- обновление списка
```

---

### День 27. Кастомные hooks

Темы:

```text
- зачем нужны hooks
- useComputers
- вынос логики API
```

Пример:

```tsx
function useComputers() {
  const [computers, setComputers] = useState<Computer[]>([])

  return {
    computers,
    setComputers,
  }
}
```

---

### День 28. Практика API

Мини-проект:

```text
React + Go API:
- получить список ПК
- добавить ПК
- удалить ПК
- обработать ошибку
```

---

## Блок 5. Финальный проект

### День 29. Финальная сборка

Темы:

```text
- сборка приложения
- npm run build
- dist/
- проверка ошибок TypeScript
```

Команда:

```bash
npm run build
```

---

### День 30. Финальный проект

Финал:

```text
Система учёта компьютеров:
- React + TypeScript
- страницы
- компоненты
- формы
- API
- типы
- поиск
- фильтр
```

---

# Что нужно знать до курса

Желательно понимать минимум:

```text
- HTML: div, h1, p, button, input, form
- CSS: color, margin, padding, display
- JavaScript: let, const, function, array, object, map
- TypeScript: type, interface, string, number, boolean
```

Но можно идти прямо по курсу. Когда что-то будет непонятно — будем разбирать на пальцах.

---

# Главная схема React

Запомни просто:

```text
Component = кусок интерфейса
Props = данные, которые пришли снаружи
State = данные, которые меняются внутри
Event = действие пользователя
API = данные с backend
```

Пример на пальцах:

```text
ComputerCard — компонент
name, room — props
isSelected — state
onClick — event
/computers — API
```

---

# Первый проект, который будем писать

```tsx
type Computer = {
  id: number
  name: string
  room: string
}

const computers: Computer[] = [
  { id: 1, name: "PC-101", room: "101" },
  { id: 2, name: "PC-102", room: "102" },
]

function App() {
  return (
    <div>
      <h1>Список компьютеров</h1>

      {computers.map((computer) => (
        <div key={computer.id}>
          <h2>{computer.name}</h2>
          <p>Кабинет: {computer.room}</p>
        </div>
      ))}
    </div>
  )
}

export default App
```

Это уже маленький React + TypeScript код.

---

# Как будем учиться

Правильный порядок такой:

```text
1. Понять идею
2. Написать код
3. Сломать код
4. Исправить ошибку
5. Повторить
```

Не надо пытаться сразу писать идеально. В React сначала важно понять поток данных:

```text
данные → компонент → экран → действие пользователя → изменение данных → новый экран
```

---

# Следующий шаг

Начинай с:

```text
День 1: установка, Vite, первый React + TypeScript проект
```

Напиши: **День 1** — и пойдём пошагово, как с Go.