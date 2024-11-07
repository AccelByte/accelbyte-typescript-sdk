import 'dotenv/config'
import { AccelByte, Network } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'
import { CurrencyApi, ItemApi } from '@accelbyte/sdk-platform'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: process.env.AB_BASE_URL || '',
    clientId: process.env.AB_CLIENT_ID || '',
    redirectURI: process.env.AB_REDIRECT_URI || '',
    namespace: process.env.AB_NAMESPACE || ''
  }
})

const main = async () => {
  try {
    console.info(sdk.assembly())
    
    const tokenResponse = await OAuth20Api(sdk, {
      axiosConfig: {
        request: {
          headers: {
            // If you're using Public IAM Client you can leave CLIENT_SECRET as empty string
            // But if you're using Confidential IAM Client you need to provide the CLIENT_SECRET
            Authorization: `Basic ${Buffer.from(`${process.env.AB_CLIENT_ID}:${process.env.AB_CLIENT_SECRET || ''}`).toString('base64')}`
          }
        }
      }
    }).postOauthToken_v3({ grant_type: 'client_credentials' })

    if (!tokenResponse.data.access_token) {
      throw new Error('Login failed')
    }
    const { access_token, refresh_token } = tokenResponse.data

    sdk.setToken({ accessToken: access_token, refreshToken: refresh_token })

    const currenciesResponse = await CurrencyApi(sdk).getCurrencies()
    console.log(currenciesResponse.data)

    const itemResponse = await ItemApi(sdk).getItemsByCriteria()
    console.log(itemResponse.data)
    
    const customResponse = await customNetworkCall()
    console.log(customResponse.data)
  } catch (error) {
    console.error(error)
  }
}

// Below example can be used when we want to create a call into an endpoint using Web SDK
async function customNetworkCall() {
  try {
    const config = sdk.assembly()
    const network = Network.create({
      baseURL: config.coreConfig.baseURL,
      headers: { Authorization: config.axiosConfig.request.headers.Authorization }
    })
    const currentUser = await network.get('/basic/v1/public/namespaces')
    return currentUser
  } catch (err) {
    console.error(err)
  }
}

main()
