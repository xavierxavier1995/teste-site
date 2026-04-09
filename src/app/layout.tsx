import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultório Médico Premium',
  description: 'Atendimento personalizado com os melhores médicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
