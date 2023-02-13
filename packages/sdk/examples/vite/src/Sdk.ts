import { Accelbyte } from '@accelbyte/sdk'

const SDK_CONFIG = {
  baseURL: '/api',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG
})

export async function getSdkTestValues() {
  const [listDiscoveryConfigs, listOfCurrencies, listOfItems, listOfNamespaces] = await Promise.all([
    sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs(),

    sdk.Platform.Currency().getCurrencies(),
    sdk.Platform.Item().fetchItemsByCriteria({}),

    // These require authentication and we can't use it right away.
    // Ensure that you have logged in (have cookies) or pass the access token to the `Authorization` header.
    sdk.Basic.Namespace({
      config: {
        headers: {
          Authorization: `Bearer <replace-this-with-access-token>`
        }
      }
    }).getNamespaces()
  ])

  return {
    listDiscoveryConfigs,
    listOfCurrencies,
    listOfItems,
    listOfNamespaces
  }
}
