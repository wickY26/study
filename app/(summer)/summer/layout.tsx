import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../../globals.css'
import { Providers } from '../../providers'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'
import NavigationBar from '@/components/NavigationBar/NavigationBar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers theme='summer'>
        <body className={inter.className}>
          <>
            <NavigationBar />
            {children}
          </>
        </body>
      </Providers>
    </html>
  )
}
