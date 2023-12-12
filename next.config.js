/** @type {import('next').NextConfig} */
const ENVS = require("./configs/envs.ts");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: ENVS[process.env.ENV] || ENVS["dev"],
};

module.exports = nextConfig;
