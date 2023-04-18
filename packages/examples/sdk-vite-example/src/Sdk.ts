/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Accelbyte } from '@accelbyte/sdk'
import { Platform } from '@accelbyte/sdk-platform'
import { Iam, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'http://localhost:3030/api',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

export async function getSdkTestValues() {
  const [currentUser, listOfCurrencies, listOfItems] = await Promise.all([
    Iam.UsersApi(sdk).getUsersMe(),
    Platform.CurrencyApi(sdk).getCurrencies(),
    Platform.ItemApi(sdk).getItemsByCriteria({})
  ])

  return {
    currentUser,
    listOfCurrencies,
    listOfItems
  }
}

export function login() {
  const url = new IamUserAuthorizationClient(sdk).createLoginURL()
  window.location.replace(url)
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
