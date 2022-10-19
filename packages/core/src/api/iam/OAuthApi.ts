/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/* eslint-disable camelcase */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { MFA_DATA_STORAGE_KEY } from '@od-web-sdk/api/iam/UserAuthorization'
import { OAuth20$ } from '@od-web-sdk/generated-public/iam/OAuth20$'
import { OAuth20Extension$ } from '@od-web-sdk/generated-public/iam/OAuth20Extension$'
import { Verify2FAParam } from '@od-web-sdk/models/TwoFA'
import { Network } from '@od-web-sdk/utils/Network'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { Buffer } from 'buffer'

export interface OAuthApiOptions {
  clientId: string
}

export class OAuthApi {
  // constructor(private conf: AxiosRequestConfig, private options: OAuthApiOptions) {}
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true, private options: OAuthApiOptions) {}

  newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace, this.cache)
  }

  newOAuth20Extension() {
    return new OAuth20Extension$(Network.create(this.conf), this.namespace, this.cache)
  }

  logout = () => {
    const axios = Network.create({
      ...this.conf,
      headers: { 'Content-Type': 'text/plain' }
    })
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    SdkCache.clearCache()
    return new OAuth20Extension$(axios, this.namespace, this.cache).postIamV3Logout()
  }

  revoke = ({ token }: { token: string }) => {
    const axios = Network.create({
      ...this.conf,
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.options.clientId}:`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    SdkCache.clearCache()
    return new OAuth20$(axios, this.namespace, this.cache).postIamV3OauthRevoke({ token })
  }

  verify2FA = async ({ factor, code, mfaToken = null, rememberDevice }: Verify2FAParam) => {
    Network.setDeviceTokenCookie()
    const result = await this.newInstance().postIamV3OauthMfaVerify({ factor, code, rememberDevice, mfaToken })
    if (result.error) throw result.error
    Network.removeDeviceTokenCookie()
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    return result.response
  }

  getCurrentLocationCountry = () => {
    return this.newOAuth20Extension().fetchIamV3LocationCountry()
  }

  getThirdPartyPlatformToken = (userId: string, platformId: string) => {
    return this.newInstance().fetchV3OauthUsersByUseridPlatformsByPlatformidPlatformToken(userId, platformId)
  }

  authenticateWithLink = (data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }) => {
    return this.newOAuth20Extension().postIamV3AuthenticateWithLink(data)
  }
}
