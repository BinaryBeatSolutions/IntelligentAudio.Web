import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: '/api/backend/:path*',
                destination: 'https://api.intelligentaudio.net*',
            },
        ]
    },
};

export default nextConfig;
