// @ts-check
import { Accelbyte } from '@accelbyte/sdk'

const SDK_CONFIG = {
  baseURL: '/api',
  clientId: import.meta.env.VITE_SDK_CLIENT_ID || '',
  namespace: import.meta.env.VITE_SDK_NAMESPACE || '',
  redirectURI: import.meta.env.VITE_SDK_REDIRECT_URI || ''
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG,
  config: {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_SDK_ACCESS_TOKEN}`
    }
  }
})

export async function getSdkTestValues() {
  const [listDiscoveryConfigs, listOfCurrencies, listOfItems, listOfNamespaces] = await Promise.all([
    sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs(),

    sdk.Platform.Currency().getCurrencies(),
    sdk.Platform.Item().fetchItemsByCriteria({}),

    // These require authentication and we can't use it right away.
    // Ensure that you have set `VITE_SDK_ACCESS_TOKEN` in the `.env` file.
    sdk.Basic.Namespace().getNamespaces()
  ])

  return {
    listDiscoveryConfigs,
    listOfCurrencies,
    listOfItems,
    listOfNamespaces
  }
}
