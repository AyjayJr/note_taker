import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note-Taking App',
  description: 'A place to store your notes inspired by the zettlekasten method',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={'text-white bg-primary ${inter.className}'}>{children}</body>
    </html>
  )
}
