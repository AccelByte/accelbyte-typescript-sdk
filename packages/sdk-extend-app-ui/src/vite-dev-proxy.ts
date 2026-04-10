import cookie from 'cookie'
import httpProxy from 'http-proxy'
import type { Plugin } from 'vite'

interface DevProxyPluginParam {
  /**
   * The AGS backend base URL. Must match the `baseURL` registered in your IAM OAuth client
   * (e.g. `"https://my-studio.accelbyte.io"`).
   */
  baseUrl: string
  /**
   * The OAuth2 redirect URI. Must match the redirect URI registered in your IAM OAuth client
   * (e.g. `"http://localhost:5173"`).
   */
  redirectURI: string
}

/**
 * Dev-only Vite plugin that proxies /proxy/* to the AGS backend.
 *
 * Reads the namespace from the access_token cookie to build the correct
 * Referer header, which AGS uses for subdomain-based routing.
 */
export function devProxyPlugin(env: DevProxyPluginParam): Plugin {
  return {
    name: 'dynamic-proxy',
    configureServer(server) {
      const proxy = httpProxy.createProxyServer({
        changeOrigin: true,
        cookieDomainRewrite: 'localhost'
      })

      server.httpServer?.on('close', () => proxy.close())

      // The '/proxy' prefix is automatically stripped from req.url by the middleware mount point.
      server.middlewares.use('/proxy', (req, res) => {
        const { target, referer } = getTargetAndReferer(req.headers.cookie ?? '', env)
        req.headers.referer = referer

        proxy.web(req, res, { target }, err => {
          if (err) {
            console.error('Proxy error:', err)
            res.writeHead(502)
            res.end('Bad gateway')
          }
        })
      })
    }
  }
}

export function getTargetAndReferer(cookieHeader: string, env: DevProxyPluginParam) {
  const isSharedCloud = env.baseUrl.includes('.gamingservices.accelbyte.io')
  const target = env.baseUrl
  let referer = env.redirectURI

  try {
    if (cookieHeader && isSharedCloud) {
      const parsedCookie = cookie.parse(cookieHeader as string)
      const accessToken = parsedCookie.access_token

      // When we have access token, we want to ensure we have the right Referer header.
      if (!accessToken) return { target, referer }

      const [, tokenPayload] = accessToken.split('.')
      const { namespace } = JSON.parse(Buffer.from(tokenPayload, 'base64url').toString())

      // For Shared Cloud, spoof the `referer`. We already log in from the correct client ID and redirect URI,
      // it's just the referer that has to be matched with our redirect URI.
      //
      // For example: if redirect URI is localhost:5173, and namespace is hello-world,
      // backend will expect the referer URL to be hello-world.localhost.5173.
      referer = `http://${namespace}.${new URL(env.redirectURI!).host}`
    }
  } catch (err) {
    console.error('Failed to parse JWT for proxy target:', err)
  }

  return { target, referer }
}
