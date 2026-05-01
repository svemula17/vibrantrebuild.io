/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/strategic", destination: "/services", permanent: true },
    { source: "/transform-2", destination: "/services/cloud-modernization", permanent: true },
    { source: "/data-2", destination: "/services/data-analytics", permanent: true },
    { source: "/erp", destination: "/services/erp-optimization", permanent: true },
    { source: "/vision", destination: "/about", permanent: true },
    { source: "/service-delivery-model", destination: "/about", permanent: true }
  ]
};

export default nextConfig;
