import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Software House | Build. Scale. Innovate.',
  description: 'We are a modern software house delivering scalable web, mobile, and AI solutions.',
  keywords: 'software development, web development, mobile apps, AI solutions, software house, technology',
  authors: [{ name: 'Software House Team' }],
  creator: 'Software House',
  publisher: 'Software House',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://softwarehouse.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Software House | Build. Scale. Innovate.',
    description: 'We are a modern software house delivering scalable web, mobile, and AI solutions.',
    url: 'https://softwarehouse.com',
    siteName: 'Software House',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Software House - Modern Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software House | Build. Scale. Innovate.',
    description: 'We are a modern software house delivering scalable web, mobile, and AI solutions.',
    images: ['/og-image.jpg'],
    creator: '@softwarehouse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
