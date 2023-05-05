import cx from "clsx"
import { ButtonProps } from "./types"
import { Text } from "../Text"

const Button = ({ content, reverse, className }: ButtonProps) => {
  return (
    <button
      className={cx(
        `border border-primary hover:cursor-pointer ${reverse ? "bg-secondary text-white" : "bg-white text-primary"
        }`,
        className,
        "p-3 rounded-md my-3 border-none px-7 !hover:cursor-pointer"
      )}>
      <Text
        size='description'
        className='tracking-wide !font-semibold'>
        {content}
      </Text>
    </button>
  )
}

export default Button
