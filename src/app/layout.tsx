import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Liminal Spaces Images Generator',
  description: 'Liminal Spaces Images Generator with models/SG161222/Realistic_Vision_V1.4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
