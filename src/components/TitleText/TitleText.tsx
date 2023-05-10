'use client'

import cx from "clsx"
import { Text } from "../Text"
import { TitleTextProps } from "./types"
import useSize from "@/hooks/useSize"

const TitleText = ({
  children,
  direction,
  size = 'head',
  className,
}: TitleTextProps) => {
  const { tablet, phone } = useSize()

  return (
    <div className='relative w-fit max-h-fit'>
      <div className={cx(`bg-primary h-1 w-12 -top-2 absolute ${direction === 'left' ? "left-6" : 'left-1/2'} -translate-x-1/2`)} />
      <Text
        size={tablet ? 'title' : phone ? 'description' : 'head'}
        className={cx(
          `tracking-wide font-medium mt-1 mb-6`,
          className
        )}>
        {children}
      </Text>
    </div>
  )
}

export default TitleText
