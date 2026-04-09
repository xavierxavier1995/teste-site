/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compressão automática
  compress: true,

  // Gerar ETags para cache
  generateEtags: true,

  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ]
  },

  // Redirecionamentos
  async redirects() {
    return []
  },

  // Reescritas para páginas dinâmicas
  async rewrites() {
    return []
  },
}

module.exports = nextConfig
