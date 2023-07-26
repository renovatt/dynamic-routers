/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    images: {
        remotePatterns: [
            {
                hostname: 'raw.githubusercontent.com'
            },
            {
                hostname: 'skillicons.dev'
            }
        ]
    },
}


module.exports = nextConfig
