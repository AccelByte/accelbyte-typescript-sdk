/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/* eslint-disable camelcase */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { MFA_DATA_STORAGE_KEY } from '@accelbyte/sdk/api/iam/UserAuthorizationApi'
import { OAuth20$ } from '@accelbyte/sdk/generated-public/iam/OAuth20$'
import { OAuth20Extension$ } from '@accelbyte/sdk/generated-public/iam/OAuth20Extension$'
import { Request2FAEmailCode, Verify2FAParam } from '@accelbyte/sdk/models/TwoFA'
import { Network } from '@accelbyte/sdk/utils/Network'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { Buffer } from 'buffer'

export interface OAuthApiOptions {
  clientId: string
}

export class OAuthApi {
  /**
   * @internal
   */
  constructor(
    private readonly conf: SDKRequestConfig,
    private readonly namespace: string,
    private readonly cache,
    private readonly options: OAuthApiOptions
  ) {}

  /**
   * @internal
   */
  newOAuth20Extension = () => {
    return new OAuth20Extension$(Network.create(this.conf), this.namespace, this.cache)
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
    SdkCache.clearCache()
    // TODO
    return new OAuth20Extension$(axios, this.namespace, this.cache).createLogout()
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
    SdkCache.clearCache()
    return new OAuth20$(axios, this.namespace, this.cache).postOauthRevoke({ token })
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

  /**
   * GET [/iam/v3/location/country](api)
   *
   * This method get country location based on the request.
   */
  getCurrentLocationCountry = () => {
    return this.newOAuth20Extension().fetchLocationCountry()
  }

  /**
   * GET [/iam/v3/oauth/namespaces/{namespace}/users/{userId}/platforms/{platformId}/platformToken](api)
   *
   * Retrieve User Third Party Platform Token
   *
   * This method used for retrieving third party platform token for user that login using third party,
   * if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace.
   * Passing platform group name or it's member will return same access token that can be used across the platform members.
   *
   * The third party platform and platform group covered for this is:
   *  - (psn) ps4web
   *  - (psn) ps4
   *  - (psn) ps5
   *  - epicgames
   *  - twitch
   *  - awscognito
   *
   */
  getThirdPartyPlatformToken = (userId: string, platformId: string) => {
    return this.newInstance().fetchPlatformTokenOauth_ByUserId_ByPlatformId(userId, platformId)
  }

  /**
   * POST [/iam/v3/authenticateWithLink](api)
   *
   * This method is being used to authenticate a user account and perform platform link.
   * It validates user's email / username and password.
   * If user already enable 2FA, then invoke _/mfa/verify_ using __mfa_token__ from this method response.
   *
   * ##Device Cookie Validation
   *
   * Device Cookie is used to protect the user account from brute force login attack,
   * [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies).
   * This method will read device cookie from cookie __auth-trust-id__. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   *
   */
  authenticateWithLink = (data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }) => {
    return this.newOAuth20Extension().postAuthenticateWithLink(data)
  }

  /**
   * POST [/iam/v3/link/code/validate](api)
   *
   * This method is being used to validate one time link code.
   * It require a valid user token.
   * Should specify the target platform id and current user should already linked to this platform.
   * Current user should be a headless account.
   */
  validateOneTimeLinkCode = (data: { oneTimeLinkCode: string | null }) => {
    return this.newOAuth20Extension().postLinkCodeValidate(data)
  }

  /**
   * POST [/iam/v3/link/token/exchange](api)
   *
   * This method is being used to generate user's token by one time link code.
   * It require publisher ClientID
   * It required a code which can be generated from __/iam/v3/link/code/request__.
   */
  exchangeTokenByOneTimeLinkCode = (data: { oneTimeLinkCode: string | null; client_id: string | null }) => {
    return this.newOAuth20Extension().postLinkTokenExchange(data)
  }

  private newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace, this.cache)
  }
}
