// @ts-check
import { Accelbyte } from '@accelbyte/sdk'
import { config } from 'dotenv'

config()

const SDK_CONFIG = {
  baseURL: process.env.SDK_BASE_URL || '',
  clientId: process.env.SDK_CLIENT_ID || '',
  namespace: process.env.SDK_NAMESPACE || '',
  redirectURI: process.env.SDK_REDIRECT_URI || ''
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG,
  config: {
    headers: {
      Authorization: `Bearer ${process.env.SDK_ACCESS_TOKEN}`
    }
  }
})

// Sample SDK calls:
main()

async function main() {
  console.info(SDK_CONFIG)

  console.log(sdk.IAM.UserAuthorization().createLoginURL())

  const listDiscoveryConfigs = await sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs()

  console.info('List of discovery configs:')
  console.info(JSON.stringify(listDiscoveryConfigs))

  const listOfCurrencies = await sdk.Platform.Currency().getCurrencies()
  const listOfItems = await sdk.Platform.Item().fetchItemsByCriteria({})

  console.info('List of namespaces:')
  console.info(JSON.stringify(listOfCurrencies))

  console.info('List of items:')
  console.info(JSON.stringify(listOfItems))

  // These require authentication and we can't use it right away.
  // Ensure that you have set `SDK_ACCESS_TOKEN` in the `.env` file.
  const listOfNamespaces = await sdk.Basic.Namespace().getNamespaces()

  console.info('List of namespaces:')
  console.info(JSON.stringify(listOfNamespaces))
}
