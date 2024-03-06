/** @type {import('next').NextConfig} */
const nextConfig = {
    //redirct configuration
    async redirects() {
        return [
            {
                source: '/foo',
                destination: '/about',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
