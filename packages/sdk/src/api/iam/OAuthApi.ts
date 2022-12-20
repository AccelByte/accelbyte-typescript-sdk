/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/* eslint-disable camelcase */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { MFA_DATA_STORAGE_KEY } from '@accelbyte/sdk/api/iam/UserAuthorization'
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
  newOAuth20Extension() {
    return new OAuth20Extension$(Network.create(this.conf), this.namespace, this.cache)
  }

  /**
   * <p>This method is used to remove <b>access_token</b>, <b>refresh_token</b> from cookie and revoke token from usage.</p>
   *    <p>Supported methods:</p>
   *      <ul>
   *        <li>VerifyToken to verify token from header</li>
   *        <li>AddTokenToRevocationList to revoke token with TTL</li>
   *      </ul>
   */
  logout = () => {
    const axios = Network.create({
      ...this.conf,
      headers: { 'Content-Type': 'text/plain' }
    })
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    SdkCache.clearCache()
    return new OAuth20Extension$(axios, this.namespace, this.cache).postIamV3Logout()
  }

  /**
   * <p>This method revokes a token.</p>
   *           <p>This method requires authorized requests header with Basic Authentication from client that establish the token.</p><br>action code: 10706
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
    return new OAuth20$(axios, this.namespace, this.cache).postIamV3OauthRevoke({ token })
  }

  /**
   * Verify 2FA code<br/>
   * <p>This method is used for verifying 2FA code.</p>
   *          <h2>2FA remember device</h2>
   *          <p>To remember device for 2FA, should provide cookie: device_token or header: Device-Token</p>
   *
   */
  verify2FA = async ({ factor, code, mfaToken = null, rememberDevice }: Verify2FAParam) => {
    Network.setDeviceTokenCookie()
    const result = await this.newInstance().postIamV3OauthMfaVerify({ factor, code, rememberDevice, mfaToken })
    if (result.error) throw result.error
    Network.removeDeviceTokenCookie()
    localStorage.removeItem(MFA_DATA_STORAGE_KEY)
    return result.response
  }

  request2FAEmailCode = async ({ mfaToken = null, factor }: Request2FAEmailCode) => {
    const result = await this.newInstance().postIamV3OauthMfaCode({ mfaToken, clientId: this.options.clientId, factor })
    if (result.error) throw result.error
    return result.response
  }

  /**
   * <p>This method get country location based on the request.</p>
   */
  getCurrentLocationCountry = () => {
    return this.newOAuth20Extension().fetchIamV3LocationCountry()
  }

  /**
   * Retrieve User Third Party Platform Token<br/>
   * <p>
   * This method used for retrieving third party platform token for user that login using third party,
   * if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace.
   * Passing platform group name or it's member will return same access token that can be used across the platform members.
   * </p>
   * <p>The third party platform and platform group covered for this is:</p>
   * <ul>
   *  <li>(psn) ps4web</li>
   *  <li>(psn) ps4</li>
   *  <li>(psn) ps5</li>
   *  <li>epicgames</li>
   *  <li>twitch</li>
   *  <li>awscognito</li>
   * </ul>
   */
  getThirdPartyPlatformToken = (userId: string, platformId: string) => {
    return this.newInstance().fetchV3OauthUsersByUseridPlatformsByPlatformidPlatformToken(userId, platformId)
  }

  /**
   * This method is being used to authenticate a user account and perform platform link.
   * It validates user's email / username and password.
   * If user already enable 2FA, then invoke <i>/mfa/verify</i> using <b>mfa_token</b> from this method response.
   *
   * <h2>Device Cookie Validation</h2>
   *
   * Device Cookie is used to protect the user account from brute force login attack, <a target="_blank" href="https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies">more detail from OWASP<a>.
   * This method will read device cookie from cookie <b>auth-trust-id</b>. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   *
   */
  authenticateWithLink = (data: {
    username: string | null
    password: string | null
    linkingToken: string | null
    client_id: string | null
    extend_exp?: boolean | null
  }) => {
    return this.newOAuth20Extension().postIamV3AuthenticateWithLink(data)
  }

  /**
   * This method is being used to validate one time link code.
   * It require a valid user token.
   * Should specify the target platform id and current user should already linked to this platform.
   * Current user should be a headless account.
   *
   */
  validateOneTimeLinkCode(data: { oneTimeLinkCode: string | null }) {
    return this.newOAuth20Extension().postIamV3LinkCodeValidate(data)
  }

  /**
   * This method is being used to generate user's token by one time link code.
   * It require publisher ClientID
   * It required a code which can be generated from <strong>/iam/v3/link/code/request</strong>.<br>
   *
   */
  exchangeTokenByOneTimeLinkCode(data: { oneTimeLinkCode: string | null; client_id: string | null }) {
    return this.newOAuth20Extension().postIamV3LinkTokenExchange(data)
  }

  private newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace, this.cache)
  }
}
