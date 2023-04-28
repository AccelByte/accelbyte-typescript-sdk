/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AccelbyteSDK } from '@accelbyte/sdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

export function login(sdk: AccelbyteSDK) {
  const url = new IamUserAuthorizationClient(sdk).createLoginURL()
  window.location.replace(url)
}

export async function loginWithPassword(sdk: AccelbyteSDK, username: string, password: string) {
  try {
    const response = await new IamUserAuthorizationClient(sdk).loginWithPasswordAuthorization({ username, password })
    if (response.error) throw response.error
    return {
      accessToken: response?.response?.data.access_token,
      refreshToken: response?.response?.data.refresh_token
    }
  } catch (error) {
    console.error(error)
  }

  return null
}
