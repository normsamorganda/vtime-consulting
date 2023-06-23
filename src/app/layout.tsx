import "./globals.css"
import { Open_Sans } from "next/font/google"

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
})

export const metadata = {
  title: "FH INTERNATIONAL Consulting Co. Inc",
  description: "FH INTERNATIONAL Consulting Co. Inc",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
      <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={opensans.className}>{children}</body>
    </html>
  )
}
