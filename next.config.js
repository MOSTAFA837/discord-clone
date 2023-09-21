/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  env: {
    DATABASE_URL:
      "postgresql://postgres:admin@localhost:5432/discord-clone?schema=public",
  },
};

module.exports = nextConfig;
