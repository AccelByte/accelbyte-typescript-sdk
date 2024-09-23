/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AccelByte, Network } from '@accelbyte/sdk'
import { IamUserAuthorizationClient, UsersApi } from '@accelbyte/sdk-iam'
import { CurrencyApi, ItemApi } from '@accelbyte/sdk-platform'

export const BASE_SDK_CORE_CONFIG = {
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : 'https://prod.gamingservices.accelbyte.io',
  clientId: import.meta.env.VITE_CLIENT_ID,
  namespace: import.meta.env.VITE_NAMESPACE,
  redirectURI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000'
}

const sdk = AccelByte.SDK({ coreConfig: BASE_SDK_CORE_CONFIG })

export async function getSdkTestValues() {
  const [currentUser, listOfCurrencies, listOfItems, currentUserCustomCall] = await Promise.all([
    UsersApi(sdk).getUsersMe_v3(),
    CurrencyApi(sdk).getCurrencies(),
    ItemApi(sdk).getItemsByCriteria({}),
    customNetworkCall()
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
  console.log('🚀 ~ login ~ url:', url)
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
async function customNetworkCall() {
  try {
    const config = sdk.assembly()
    const adminEndpoint = '/iam/v3/public/users/me'
    const network = Network.create({ baseURL: config.coreConfig.baseURL, ...sdk.assembly().axiosConfig.request })

    return await network.get(adminEndpoint)
  } catch (err) {
    console.error(err)
  }
}
