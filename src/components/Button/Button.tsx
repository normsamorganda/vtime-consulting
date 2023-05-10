'use client'
import cx from "clsx"
import { ButtonProps } from "./types"
import { Text } from "../Text"
import useSize from "@/hooks/useSize"

const Button = ({ content, reverse, className }: ButtonProps) => {
  const { tablet, phone } = useSize()

  return (
    <button
      className={cx(
        `border border-primary/10 hover:cursor-pointer transition-all ${reverse ? "bg-primary text-white hover:text-secondary hover:bg-white" : "bg-white text-primary hover:!text-white hover:!bg-primary"
        }`,
        className,
        "p-3 rounded-md my-3 px-7 !hover:cursor-pointer", phone && '!p-[5px]'
      )}>
      <Text
        size={!phone ? 'description' : 'tiny'}
        className={cx('tracking-wide !font-semibold')}>
        {content}
      </Text>
    </button>
  )
}

export default Button
