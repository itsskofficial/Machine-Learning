import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SMS Spam Classifier',
  description: 'Simple app to classify whether a text is spam or not',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
