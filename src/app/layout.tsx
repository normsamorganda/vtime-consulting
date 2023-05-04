import "./globals.css"
import { Open_Sans } from "next/font/google"

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
})

export const metadata = {
  title: "VTIME",
  description: "VTIME",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
