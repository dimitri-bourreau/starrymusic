/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'symfjgesrjesehsdevmh.supabase.co',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
