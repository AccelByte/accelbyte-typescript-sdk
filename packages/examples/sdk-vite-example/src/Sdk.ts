/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Accelbyte, Network } from '@accelbyte/sdk'
import { Platform } from '@accelbyte/sdk-platform'
import { Iam, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'http://localhost:3030/api',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  },
  onEvents: {
    onGetUserSession: (accessToken, refreshToken) => {
      console.log('SDK Event: onGetUserSession', { accessToken, refreshToken })
    },
    onSessionExpired: () => {
      console.log('SDK Event: onSessionExpired')
    },
    onError: error => {
      console.error('SDK Event: onError', error.response)
    }
  }
})

export async function getSdkTestValues() {
  const [currentUser, listOfCurrencies, listOfItems, currentUserCustomCall] = await Promise.all([
    Iam.UsersApi(sdk).getUsersMe(),
    Platform.CurrencyApi(sdk).getCurrencies(),
    Platform.ItemApi(sdk).getItemsByCriteria({}),
    usingCustomNetworkCall()
  ])

  return {
    currentUser,
    listOfCurrencies,
    listOfItems,
    currentUserCustomCall
  }
}

export function login() {
  const url = new IamUserAuthorizationClient(sdk).createLoginURL()
  window.location.replace(url)
}

export async function loginWithPassword({ username, password }: { username: string; password: string }) {
  await new IamUserAuthorizationClient(sdk).loginWithPasswordAuthorization({ username, password })
  window.location.reload()
}

export async function exchangeAuthorizationCode() {
  const searchParams = new URL(window.location.href).searchParams
  const { code, error, state } = Object.fromEntries(searchParams.entries())
  if (!code) return

  try {
    await new IamUserAuthorizationClient(sdk).exchangeAuthorizationCode({ code, error, state })
    window.history.pushState({}, '', window.location.origin)
  } catch (err) {
    console.error(err)
  }
}

// Below example can be used when we want to create a call into admin endpoint using Web SDK
async function usingCustomNetworkCall() {
  try {
    const adminEndpoint = '/iam/v3/public/users/me'
    const network = Network.create(sdk.assembly())

    return await network.get(adminEndpoint)
  } catch (err) {
    console.error(err)
  }
}
