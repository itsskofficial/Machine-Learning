import '@styles/globals.css'

export const metadata = {
  title: 'SpamGuard',
  description: 'Simple app to classify whether a text is spam or ham',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-[#171717]">
        <div className="overflow-x-hidden lg:p-[100px] sm:p-[75px] xs:p-[50px]">
          {children}
        </div>
      </body>
    </html>
  )
}
