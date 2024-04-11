/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, CodeGenUtil, Network, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { Buffer } from 'buffer'
import { MFA_DATA_STORAGE_KEY } from './IamUserAuthorizationClient.js'
import { Request2FAEmailCode, Verify2FAParam } from '../models/TwoFA.js'
import { OAuth20Extension$ } from '../../generated-public/endpoints/OAuth20Extension$'
import { OAuth20$ } from '../../generated-public/endpoints/OAuth20$'
import { TokenResponse } from '../../generated-definitions/TokenResponse'

export interface OAuthApiOptions {
  clientId: string
}

/**
 * Oauth client functions
 */
export class IamOAuthClient {
  conf: SDKRequestConfig
  namespace: string
  options: OAuthApiOptions

  constructor(sdk: AccelbyteSDK, args?: ApiArgs) {
    const amb = sdk.assembly()
    this.conf = amb.config
    this.namespace = args?.namespace ? args?.namespace : amb.namespace
    this.options = {
      clientId: amb.clientId
    }
  }

  /**
   * POST [/iam/v3/logout](api)
   *
   * This method is used to remove __access_token__, __refresh_token__ from cookie and revoke token from usage.
   *    Supported methods:
   *        - VerifyToken to verify token from header
   *        - AddTokenToRevocationList to revoke token with TTL
   */
  logout = () => {
    const axios = Network.create({
      ...this.conf,
      headers: { 'Content-Type': 'text/plain' }
    })
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    return new OAuth20Extension$(axios, this.namespace).createLogout()
  }

  /**
   * POST [/iam/v3/oauth/revoke](api)
   *
   * This method revokes a token.
   *           This method requires authorized requests header with Basic Authentication from client that establish the token.action code: 10706
   */
  revoke = ({ token }: { token: string }) => {
    const axios = Network.create({
      ...this.conf,
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.options.clientId}:`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return new OAuth20$(axios, this.namespace).postOauthRevoke({ token })
  }

  /**
   * POST [/iam/v3/oauth/mfa/verify](api)
   *
   * Verify 2FA code
   * This method is used for verifying 2FA code.
   *          ##2FA remember device
   *          To remember device for 2FA, should provide cookie: device_token or header: Device-Token
   *
   */
  verify2FA = async ({ factor, code, mfaToken = null, rememberDevice }: Verify2FAParam) => {
    Network.setDeviceTokenCookie()
    const result = await this.newInstance().postOauthMfaVerify({ factor, code, rememberDevice, mfaToken })
    if (result.error) throw result.error
    Network.removeDeviceTokenCookie()
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    return result.response
  }

  /**
   * POST [/iam/v3/oauth/mfa/code](api)
   */
  request2FAEmailCode = async ({ mfaToken = null, factor }: Request2FAEmailCode) => {
    const result = await this.newInstance().postOauthMfaCode({ mfaToken, clientId: this.options.clientId, factor })
    if (result.error) throw result.error
    return result.response
  }

  private newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace)
  }

  static exchangeTokenOauthByPlatformId = (
    platformId: string,
    client_id: string,
    data: {
      platform_token?: string | null
      client_id?: string | null
      device_id?: string | null
      createHeadless?: boolean | null
      macAddress?: string | null
      skipSetCookie?: boolean | null
    },
    sdkAssemblyConfig
  ) => {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/{platformId}/token'.replace('{platformId}', platformId)
    const resultPromise = Network.create(sdkAssemblyConfig).post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: {
        ...params.headers,
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(client_id + ':').toString('base64')}`
      },
      withCredentials: false
    })

    return Validate.responseType(() => resultPromise, TokenResponse, 'TokenResponse')
  }
}
