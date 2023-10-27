import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../../globals.css'
import { Providers } from '../../providers'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher'
import NavigationBar from '@/components/NavigationBar/NavigationBar'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Universities',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers theme='university'>
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