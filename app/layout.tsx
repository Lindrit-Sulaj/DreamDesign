import './globals.css'
import { Manrope } from 'next/font/google'
import Script from 'next/script'
import { Footer } from '@/components'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Dream Design - Architecture company',
  description: 'We are passionate architects driven by a relentless pursuit of excellence. With a deep-rooted commitment to our craft, we believe that architecture has the power to transform lives and shape communities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
        <Footer />
        <Script src="https://kit.fontawesome.com/72aeedc907.js" />
      </body>
    </html>
  )
}
