import '@styles/tailwind.css'
import Header from '@components/Header'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head />
      <body className="fixed inset-0 bg-gray-800">
        <Header />
        {children}
      </body>
    </html>
  )
}
