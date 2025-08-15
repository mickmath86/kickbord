import '@/styles/tailwind.css'
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: {
    template: 'Kickbord',
    default: 'Kickbord - Close every deal',
  },
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The Radiant Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
    </ClerkProvider>
  )
}




