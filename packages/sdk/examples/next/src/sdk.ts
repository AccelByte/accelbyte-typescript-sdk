/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AccelbyteSDK } from '@accelbyte/sdk'

export function login(sdk: AccelbyteSDK) {
  const url = sdk.IAM.UserAuthorization().createLoginURL()
  window.location.replace(url)
}

export async function exchangeAuthorizationCode(sdk: AccelbyteSDK, url: string) {
  const searchParams = new URL(url).searchParams
  const { code, error, state } = Object.fromEntries(searchParams.entries())
  if (!code) return null

  try {
    const response = await sdk.IAM.UserAuthorization().exchangeAuthorizationCode({ code, error, state })
    window.history.pushState({}, '', window.location.origin)

    return {
      accessToken: response?.response?.data.access_token,
      refreshToken: response?.response?.data.refresh_token
    }
  } catch (err) {
    console.error(err)
  }

  return null
}
