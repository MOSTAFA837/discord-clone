/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  env: {
    DATABASE_URL:
      "postgresql://postgres:admin@localhost:5432/discord-clone?schema=public",
  },
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });

    return config;
  },
};

module.exports = nextConfig;
