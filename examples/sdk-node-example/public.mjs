import 'dotenv/config'
import { AccelByte, Network } from '@accelbyte/sdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { CurrencyApi, ItemApi } from '@accelbyte/sdk-platform'
import { parseArgs } from 'util'

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
    const parsedArgs = parseArgs({
      options: {
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        }
      },
      args: process.argv.slice(2)
    })
    
    const { values } = parsedArgs
    const username = values['username']
    const password = values['password']
    
    if (!username && !password) {
      console.error('Please provide valid username and password')
      process.exit(1)
    }
    
    const sdkConfig = sdk.assembly()

    console.log(sdkConfig.axiosConfig, sdkConfig.coreConfig)

    const tokenResponse = await new IamUserAuthorizationClient(sdk).loginWithPasswordAuthorization({ username, password })

    if (!tokenResponse.response?.data.access_token) {
      throw new Error('Login failed')
    }
    const { access_token, refresh_token } = tokenResponse.response.data

    sdk.setToken({ accessToken: access_token, refreshToken: refresh_token })

    const currenciesResponse = await CurrencyApi(sdk).getCurrencies()
    console.log(currenciesResponse.data)

    const itemResponse = await ItemApi(sdk).getItemsByCriteria()
    console.log(itemResponse.data)

    const customResponse = await customNetworkCall()
    console.log(customResponse?.data)
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
      headers: { Authorization: config.axiosConfig.request.headers?.Authorization }
    })
    const currentUser = await network.get('/iam/v3/public/users/me')
    return currentUser
  } catch (err) {
    console.error(err)
  }
}

main()
