import cx from "clsx"
import { TextProps } from "./types"
import config from "./config"

const Text = ({ className, children, size = "normal" }: TextProps) => {
  return <div className={cx(config[size], className)}>{children}</div>
}

export default Text
