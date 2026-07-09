type EmptyStateProps = {
  message: string
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <p className="mt-4 rounded-xl border border-gray-200 bg-white p-4 text-gray-500">
      {message}
    </p>
  )
}

export default EmptyState