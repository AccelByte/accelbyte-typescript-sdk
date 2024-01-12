// This examples requires valid Access Token with Admin Permission

import { Accelbyte } from '@accelbyte/sdk'
import { Iam } from '@accelbyte/sdk-iam'
import { Cloudsave } from '@accelbyte/sdk-cloudsave'

const ACCESS_TOKEN = '<replace with accessToken for given baseURL>'
const BEARER_AUTH_SDK_ARGS = {
  config: {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  }
}

const CLIENT_ID = '<replace with CLIENT_ID for given baseURL>'
// If you're using Public IAM Client you can leave CLIENT_SECRET as empty string
// But if you're using Confidential IAM Client you need to provide the CLIENT_SECRET
const CLIENT_SECRET = ''

const BASIC_TOKEN = `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
const BASIC_AUTH_SDK_ARGS = {
  config: {
    headers: {
      Authorization: BASIC_TOKEN
    }
  }
}

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'https://demo.accelbyte.io',
    clientId: CLIENT_ID,
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  },
  onEvents: {
    // a callback function invoked on session expiry
    onSessionExpired: () => {
      console.log('SDK EVENT: USER SESSION EXPIRED')
    },
    // a callback function invoked on session retrieval
    onGetUserSession: (accessToken, refreshToken) => {
      console.log('SDK EVENT: USER SESSION REFRESHED', { accessToken, refreshToken })
    },
    // a callback function invoked on UserEligibilityChange
    onUserEligibilityChange: () => {
      console.log('SDK EVENT: USER ELIGIBILITY CHANGE')
    },
    // a callback function fired on error
    onError: error => {
      console.log('SDK EVENT: ERROR ->', error.response)
    }
  }
})

// Sample SDK calls:
main()

async function main() {
  console.info(sdk.assembly())
  // Below examples require authentication with Admin Permission, ensure that you have logged in (have cookies)
  // or pass the access token to the `Authorization` header.
  if (ACCESS_TOKEN.length < 1000) {
    // min jwt length
    throw Error('Please provide a valid accessToken')
  }

  const res = await clientGrantToken()
  if (res.access_token) await verifyToken(res.access_token)

  await testCloudSaveAdmin()
}

async function testCloudSaveAdmin() {
  console.log('\nTesting Admin CloudSave... ')
  try {
    const adminrecords = await Cloudsave.AdminRecordAdminApi(sdk, BEARER_AUTH_SDK_ARGS).getAdminrecords()
    console.log(`Cloud Save Admin Records:`, adminrecords.data)
  } catch (ex) {
    console.log(ex)
  }
}

async function verifyToken(token) {
  console.log('Verifying access token...')

  try {
    const res = await Iam.OAuth20Api(sdk, BASIC_AUTH_SDK_ARGS).postOauthVerify({ token })
    console.log('verifyToken', res)
    return true
  } catch (error) {
    return false
  }
}

async function clientGrantToken() {
  if (CLIENT_ID === '<replace with CLIENT_ID for given baseURL>') return false

  console.log('Grant access token for current CLIENT_ID...')

  try {
    const response = await Iam.OAuth20Api(sdk, BASIC_AUTH_SDK_ARGS).postOauthToken({ grant_type: 'client_credentials' })
    console.log(`clientGrantToken:`, response)
    return response
  } catch (ex) {
    console.log(ex)
  }
}
