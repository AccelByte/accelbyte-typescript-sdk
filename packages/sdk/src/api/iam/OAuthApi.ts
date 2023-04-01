/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/* eslint-disable camelcase */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { TokenResponse } from '@accelbyte/sdk/all-public-imports'
import { MFA_DATA_STORAGE_KEY } from '@accelbyte/sdk/api/iam/UserAuthorizationApi'
import { OAuth20$ } from '@accelbyte/sdk/generated-public/iam/OAuth20$'
import { OAuth20Extension$ } from '@accelbyte/sdk/generated-public/iam/OAuth20Extension$'
import { Request2FAEmailCode, Verify2FAParam } from '@accelbyte/sdk/models/TwoFA'
import { Network } from '@accelbyte/sdk/utils/Network'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { Buffer } from 'buffer'
import { CodeGenUtil, Validate } from '@accelbyte/sdk'

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

  /**
   * POST [/iam/v3/oauth/platforms/{platformId}/token](api)
   *
   * This method is being used to Platform token grant specifically used for performing token grant using platform, e.g. Steam, Justice, etc.
   * The method automatically create an account if the account associated with the platform is not exists yet.
   * This method requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret.
   * For publisher-game namespace schema : Specify only either platform_token or device_id.
   * Device token grant should be requested along with device_id parameter against game namespace.
   * Another 3rd party platform token grant should be requested along with platform_token parameter against publisher namespace.
   *
   * #### 2FA remember device
   *
   * To remember device for 2FA, should provide cookie: device_token or header: Device-Token
   *
   * #### Supported platforms:
   *
   * - **steam**: The platform_token’s value is the authentication code returned by Steam.
   * - **steamopenid**: Steam's user authentication method using OpenID 2.0. The platform_token's value is URL generated by Steam on web authentication
   * - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth
   * - **google**: The platform_token’s value is the authorization code returned by Google OAuth
   * - **oculus**: The platform_token’s value is a string composed of Oculus's user ID and the nonce separated by a colon (:).
   * - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth.
   * - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth
   * - **android**: The device_id is the Android’s device ID
   * - **ios**: The device_id is the iOS’s device ID.
   * - **apple**: The platform_token’s value is the authorization code returned by Apple OAuth.(We will use this code to generate APP token)
   * - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID.
   * - **justice**: The platform_token’s value is the designated user’s access token.
   * - **epicgames**: The platform_token’s value is an access-token obtained from Epicgames EOS Account Service.
   * - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth.
   * - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth.
   * - **nintendo**: The platform_token’s value is the authorization code(id_token) returned by Nintendo OAuth.
   * - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT).
   * - **live**: The platform_token’s value is xbox XSTS token
   * - **xblweb**: The platform_token’s value is code returned by xbox after login
   * - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend
   * - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth.
   * - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
   *
   * #### Account Group
   *
   * Several platforms are grouped under account groups. The accounts on these platforms have the same platform user id.
   * Login using one of these platform will returns the same IAM user.
   *
   * Following is the current registered account grouping:
   * - (psn) ps4web
   * - (psn) ps4
   * - (psn) ps5
   *
   * #### Access Token Content
   *
   * Following is the access token’s content:
   * - **namespace**. It is the namespace the token was generated from.
   * - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential
   * - **roles**. The sub’s roles. It is empty if the token is generated from the client credential
   * - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace
   * - **permissions**. The sub or aud’ permissions
   * - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token.
   * - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:
   *    - 1: Email Address Verified
   *    - 2: Phone Number Verified
   *    - 4: Anonymous
   *    - 8: Suspicious Login
   * - **aud**. The aud is the client ID.
   * - **iat**. The time the token issues at. It is in Epoch time format
   * - **exp**. The time the token expires. It is in Epoch time format
   * - **sub**. The UserID. The sub is omitted if the token is generated from client credential
   *
   * #### Bans
   *
   * The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.
   *
   * action code : 10704
   *
   */
  exchangeTokenOauthByPlatformId = (
    platformId: string,
    client_id: string,
    data: {
      platform_token?: string | null
      client_id?: string | null
      device_id?: string | null
      createHeadless?: boolean | null
      macAddress?: string | null
    }
  ) => {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/oauth/platforms/{platformId}/token'.replace('{platformId}', platformId)
    const resultPromise = Network.create(this.conf).post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: {
        ...params.headers,
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(client_id + ':').toString('base64')}`
      },
      withCredentials: false
    })

    return Validate.responseType(() => resultPromise, TokenResponse)
  }

  /**
   * POST [/iam/v3/oauth/token](api)
   *
   * This method is used to grant access_token
   *
   * It supports grant type:
   * 1. Grant Type == `authorization_code`:
   *    It generates the user token by given the authorization code which generated in "/iam/v3/authenticate" API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request.
   * 2. Grant Type == `password`:
   *    The grant type to use for authenticating a user, whether it's by email / username and password combination or through platform.
   * 3. Grant Type == `refresh_token`:
   *    Used to get a new access token for a valid refresh token.
   * 4. Grant Type == `client_credentials`:
   *    It generates a token by checking the client credentials provided through Authorization header.
   *
   * #### Access Token Content
   *
   * Following is the access token’s content:
   * - **namespace**. It is the namespace the token was generated from.
   * - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential
   * - **roles**. The sub’s roles. It is empty if the token is generated from the client credential
   * - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace
   * - **permissions**. The sub or aud’ permissions
   * - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token.
   * - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents:
   *    1: Email Address Verified
   *    2: Phone Number Verified
   *    4: Anonymous
   *    8: Suspicious Login
   * - **aud**. The aud is the targeted resource server.
   * - **iat**. The time the token issues at. It is in Epoch time format
   * - **exp**. The time the token expires. It is in Epoch time format
   * - **client_id**. The UserID. The sub is omitted if the token is generated from client credential
   * - **scope**. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings
   *
   * #### Bans
   *
   * The JWT contains user's active bans with its expiry date. List of ban types can be obtained from /bans.
   *
   * #### Device Cookie Validation
   *
   * ***For grant type "password" only***
   * Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies).
   *
   * This method will read device cookie from request header **Auth-Trust-Id**.
   * If device cookie not found, it will generate a new one and set it into response body **auth_trust_id** when successfully login.
   *
   * #### Track Login History
   *
   * This method will track login history to detect suspicious login activity, please provide **Device-Id** (alphanumeric) in request header parameter otherwise it will set to "unknown".
   * Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default"
   *
   * #### 2FA remember device
   *
   * To remember device for 2FA, should provide cookie: device_token or header: Device-Token
   *
   * action code: 10703
   *
   */
  exchangeOauthToken = (data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }) => {
    return this.newInstance().postOauthToken(data)
  }

  private newInstance() {
    return new OAuth20$(Network.create(this.conf), this.namespace, this.cache)
  }
}
