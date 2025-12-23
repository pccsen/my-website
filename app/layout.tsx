import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Shakhbat Nurbek | DevOps Engineer & Python Developer',
  description: 'DevOps Engineer and Python Backend Developer. Student at Satbayev University. Available for hire and freelance projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
