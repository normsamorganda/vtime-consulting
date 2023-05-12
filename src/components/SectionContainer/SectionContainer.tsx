import cx from "clsx"
import { SectionContainerProps } from "./types"
import Image from "next/image"
import config from "./config"
import useSize from "@/hooks/useSize"

const SectionContainer = ({
  children,
  className,
  height = "normal",
  background,
  overlay,
}: SectionContainerProps) => {

  return (
    <div className={cx(`p-10 relative max-w-[75rem] mx-auto my-16`, className, 'flex flex-col', 'phone:px-3')}>
      {children}
    </div>
  )
}

export default SectionContainer
