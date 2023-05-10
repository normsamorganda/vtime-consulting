import cx from "clsx"
import { ButtonProps } from "./types"
import { Text } from "../Text"

const Button = ({ content, reverse, className }: ButtonProps) => {
  return (
    <button
      className={cx(
        `border border-primary/10 hover:cursor-pointer transition-all ${reverse ? "bg-primary text-white hover:text-secondary hover:bg-white" : "bg-white text-primary hover:!text-white hover:!bg-primary"
        }`,
        className,
        "p-3 rounded-md my-3 px-7 !hover:cursor-pointer"
      )}>
      <Text
        size='description'
        className={cx('tracking-wide !font-semibold')}>
        {content}
      </Text>
    </button>
  )
}

export default Button
