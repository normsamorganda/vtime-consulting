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
    <div className='relative max-w-fit'>
      <Text
        size={size}
        className={cx(
          `tracking-wide max-w-fit font-bold after:content-[' '] after:bg-[#2a9df4] after:absolute after:text-red-900 after:h-[2px] after:w-6 after:top-[-3px] after:left-[${
            direction === "left"
              ? "10%"
              : direction === "center"
              ? "50%"
              : "80%"
          }] after:-translate-x-1/2 mb-5`
        )}>
        {children}
      </Text>
    </div>
  )
}

export default TitleText
