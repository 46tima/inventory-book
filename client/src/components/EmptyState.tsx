type EmptyStateProps = {
  message: string
}

function EmptyState({ message }: EmptyStateProps) {
  return <p className="empty">{message}</p>
}

export default EmptyState