import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Apex | פתרונות עסקיים שמובילים צמיחה',
  description:
    'Apex מספקת שירותי ייעוץ, אסטרטגיה וטרנספורמציה דיגיטלית פרימיום כדי להעלות את העסק שלך לשלב הבא.',
}

export const viewport: Viewport = {
  themeColor: '#f0ebe3',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}