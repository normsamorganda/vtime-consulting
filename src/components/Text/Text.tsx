import cx from "clsx"
import { TextProps } from "./types"

const Text = ({ className, children, size }: TextProps) => {
  return <p className={cx(className, `!text-${size}`)}>{children}</p>
}

export default Text
