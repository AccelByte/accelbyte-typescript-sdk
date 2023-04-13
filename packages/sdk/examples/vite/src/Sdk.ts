/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Accelbyte } from '@accelbyte/sdk'

const SDK_CONFIG = {
  baseURL: 'http://localhost:3030/api',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG
})

export async function getSdkTestValues() {
  const [currentUser, listDiscoveryConfigs, listOfCurrencies, listOfItems] = await Promise.all([
    sdk.IAM.User().getCurrentUser(),
    sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs(),

    sdk.Platform.Currency().getCurrencies(),
    sdk.Platform.Item().fetchItemsByCriteria({})
  ])

  return {
    currentUser,
    listDiscoveryConfigs,
    listOfCurrencies,
    listOfItems
  }
}

export function login() {
  const url = sdk.IAM.UserAuthorization().createLoginURL()
  window.location.replace(url)
}

export async function exchangeAuthorizationCode() {
  const searchParams = new URL(window.location.href).searchParams
  const { code, error, state } = Object.fromEntries(searchParams.entries())
  if (!code) return

  try {
    await sdk.IAM.UserAuthorization().exchangeAuthorizationCode({ code, error, state })
    window.history.pushState({}, '', window.location.origin)
  } catch (err) {
    console.error(err)
  }
}
