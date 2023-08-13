import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from './ui/componets/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  preload: true,
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Liminal Space Image Generator',
  applicationName: 'Ia Generator',
  keywords: ['Next.js', 'React', 'TypeScript', 'Ia'],
  authors: [{ name: 'Jorge Assaf', url: 'https://assafdev.xyz' }],
  creator: 'Jorge Assaf',
  description: 'Liminal Space Images Generator',
  siteUrl: 'https://liminal-space.vercel.app/',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} imagen  min-h-screen grid place-content-center `}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
