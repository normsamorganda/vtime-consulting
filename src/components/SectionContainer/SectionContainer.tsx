import cx from "clsx"
import { SectionContainerProps } from "./types"
import Image from "next/image"
import config from "./config"

const SectionContainer = ({
  children,
  className,
  height="normal",
  background,
  overlay,
}: SectionContainerProps) => {
  return (
    <div
      style={
        background
          ? {
              backgroundImage: `url(${background.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize:"cover",
            }
          : {}
      }
      className={cx(`my-3 relative max-w-[85rem] mx-auto border`,overlay)}>
      <div className={cx(`p-10`, className, 'flex flex-col my-auto')}>
        {children}
      </div>
    </div>
  )
}

export default SectionContainer
