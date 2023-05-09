import cx from "clsx"
import { SectionContainerProps } from "./types"
import Image from "next/image"
import config from "./config"

const SectionContainer = ({
  children,
  className,
  height = "normal",
  background,
  overlay,
}: SectionContainerProps) => {
  return (
    <div className={cx(`p-10 relative max-w-[75rem] mx-auto mt-10 border`, className, 'flex flex-col')}>
      {children}
    </div>
  )
}

export default SectionContainer
