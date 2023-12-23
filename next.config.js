/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return [
            {
                source:"/api/:path*",
                destination: 'https://logo.niurensheji.cn/api/:path*',
            }
        ]
    },
}

module.exports = nextConfig
