import cx from "clsx"
import { ButtonProps } from "./types"

const Button = ({ content, reverse, className }: ButtonProps) => {
  return (
    <button
      className={cx(
        `border border-[#2a9df4] ${
          reverse ? "bg-[#1167b1] text-white" : "bg-[#fff] text-[#2a9df4]"
        }`,
        className,
        "p-2 rounded-md text-[8px] tracking-wider my-3 border-none px-4"
      )}>
      {content}
    </button>
  )
}

export default Button
