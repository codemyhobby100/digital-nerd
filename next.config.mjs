/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.s3.amazonaws.com", "images.unsplash.com", "cdn.sanity.io"],
  },
  compiler: {
    // see https://styled-components.com/docs/tooling#nextjs for more info
    styledComponents: true,
  },
};

export default nextConfig;
