import cx from "clsx"
import { Text } from "../Text"
import { TitleTextProps } from "./types"

const TitleText = ({
  children,
  direction,
  size,
  className,
}: TitleTextProps) => {
  return (
    <div className='relative w-fit max-h-fit'>
      <div className={cx(`bg-[#2a9df4] h-1 w-12 -top-2 absolute ${direction === 'left'? "left-6" : 'left-1/2'} -translate-x-1/2`)}/>
      <Text
        size={size}
        className={cx(
          `tracking-wide font-medium mt-1 mb-14`,
          className
        )}>
        {children}
      </Text>
    </div>
  )
}

export default TitleText
