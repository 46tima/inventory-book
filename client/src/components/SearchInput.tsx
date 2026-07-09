type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      className="mt-4 w-full rounded-xl border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500"
      placeholder="Поиск по названию, кабинету или IP..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}

export default SearchInput