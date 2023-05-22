/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@accelbyte/widgets-v2'],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://widget1game.internal.gamingservices.accelbyte.io/:path*'
      }
    ]
  }
}

module.exports = nextConfig
