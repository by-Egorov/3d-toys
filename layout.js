import './globals.css'

export const metadata = {
  title: '3D-Печать Фигурок',
  description: 'Портфолио 3D печати',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}