import 'dotenv/config'

import { AccelByte } from '@accelbyte/sdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { Lobby } from '@accelbyte/sdk-lobby'
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

    const lobbyWs = Lobby.WebSocket(sdk)

    lobbyWs.connect()

    lobbyWs.onOpen(() => {
      console.log('opened')
      // send
      lobbyWs.sendPartyInfo({ id: '<party id>' })
    })

    lobbyWs.onClose(err => {
      console.log('closed')
      console.log(err)
    })

    lobbyWs.onMessage(message => {
      console.log('message')
      console.log(message)
    })

    lobbyWs.onError(err => {
      console.log('error')
      console.log(err.message)
    })
  } catch (error) {
    console.error(error)
  }
}

main()