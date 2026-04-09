import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica Saúde Plus | Consultório Médico em São Paulo',
  description: 'Clínica médica especializada em cardiologia e clínica geral. Atendimento de qualidade com profissionais experientes. Agende sua consulta agora!',
  keywords: ['consultório médico', 'clínica de saúde', 'cardiologia', 'clínica geral', 'São Paulo'],
  authors: [{ name: 'Clínica Saúde Plus' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://clinicasaudeplus.com',
    title: 'Clínica Saúde Plus | Consultório Médico Premium',
    description: 'Atendimento médico de qualidade com profissionais experientes e equipamentos modernos',
    images: [
      {
        url: 'https://clinicasaudeplus.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Clínica Saúde Plus',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  canonical: 'https://clinicasaudeplus.com',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Clínica Saúde Plus',
              image: 'https://clinicasaudeplus.com/logo.png',
              description: 'Clínica médica especializada em cardiologia e clínica geral',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Av. Paulista, 1000',
                addressLocality: 'São Paulo',
                addressRegion: 'SP',
                postalCode: '01311-100',
                addressCountry: 'BR',
              },
              telephone: '+55 11 3000-0000',
              email: 'contato@clinicasaudeplus.com',
              url: 'https://clinicasaudeplus.com',
              sameAs: [
                'https://www.facebook.com/clinicasaudeplus',
                'https://www.instagram.com/clinicasaudeplus',
              ],
              priceRange: 'R$',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '08:00',
                  closes: '12:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
