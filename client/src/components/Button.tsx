import type { ReactNode } from "react"
import styles from "./Button.module.css"

type ButtonVariant = "primary" | "danger"

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  onClick: () => void
}

function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button