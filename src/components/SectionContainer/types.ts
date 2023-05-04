import { ReactNode } from "react"

export interface SectionContainerProps {
  children: ReactNode
  className?: string
  height?: "doubleHalf" | "full" | "semiHalf" | "half" | "extras" | "services" | "normal" ,
  background?: any
  overlay?:any
}
