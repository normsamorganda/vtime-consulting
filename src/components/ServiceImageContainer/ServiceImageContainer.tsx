import Image from "next/image"
import { ServiceImageProps } from "./types"
import cx from "clsx"

const ServiceImageContainer = ({
  image,
  tag,
  className,
}: ServiceImageProps) => {
  return (
    <div>
      <Image
        src={image}
        width={130}
        height={100}
        alt='outsourcing'
      />
      <p
        className={cx(
          `text-[10px] relative  after:content-[' '] after:bg-[#1b609c] after:absolute after:h-[2px] after:w-3 after:top-1/2 after:-translate-y-1/2 after:-left-5 ml-5`,
          className
        )}>
        {tag}
      </p>
    </div>
  )
}

export default ServiceImageContainer
