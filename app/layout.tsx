import type { Metadata } from 'next'
import { Lexend, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Md Muzadded Chowdhury — AI & Automation Engineer',
  description:
    'Portfolio of Md Muzadded Chowdhury — AI & Automation Engineer specializing in LLMs, RAG systems, agentic workflows, and scalable AI automation. Based in Dhaka, Bangladesh.',
  keywords: [
    'AI Engineer', 'LLM', 'RAG', 'LangChain', 'Automation', 'Machine Learning',
    'FastAPI', 'Python', 'Portfolio', 'Muzadded Chowdhury',
  ],
  authors: [{ name: 'Md Muzadded Chowdhury', url: 'mailto:muzaddedchowdhury@gmail.com' }],
  openGraph: {
    title: 'Md Muzadded Chowdhury — AI & Automation Engineer',
    description: 'Portfolio of Md Muzadded Chowdhury, AI & Automation Engineer.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Muzadded Chowdhury — AI & Automation Engineer',
    description: 'Portfolio of Md Muzadded Chowdhury, AI & Automation Engineer.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
