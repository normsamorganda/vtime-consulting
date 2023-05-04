import { ReactNode } from "react"

export type TextProps = {
  className?: string
  size?: "hero" | "title" | "subtitle" | "normal" | "description" | "tiny" | "head"
  children: ReactNode
}
