import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Neto Sachar',
  description:
  'Neto Sachr - עושים שכר בשבילך.',
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased flex min-h-screen flex-col`}>
        <Navbar /> 
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}