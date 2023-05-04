import cx from "clsx"
import { ButtonProps } from "./types"
import { Text } from "../Text"

const Button = ({ content, reverse, className }: ButtonProps) => {
  return (
    <button
      className={cx(
        `border border-[#2a9df4] hover:cursor-pointer ${
          reverse ? "bg-[#1167b1] text-white" : "bg-[#fff] text-[#2a9df4]"
        }`,
        className,
        "p-3 rounded-md my-3 border-none px-7 !hover:cursor-pointer"
      )}>
      <Text
        size='normal'
        className='tracking-wide font-medium'>
        {content}
      </Text>
    </button>
  )
}

export default Button
