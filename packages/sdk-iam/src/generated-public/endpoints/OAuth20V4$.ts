/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'

export class OAuth20V4$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This endpoint supports grant type: 1. Grant Type == &lt;code&gt;authorization_code&lt;/code&gt;: It generates the user token by given the authorization code which generated in &#34;/iam/v3/authenticate&#34; API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request. 2. Grant Type == &lt;code&gt;password&lt;/code&gt;: The grant type to use for authenticating a user, whether it&#39;s by email / username and password combination or through platform. 3. Grant Type == &lt;code&gt;refresh_token&lt;/code&gt;: Used to get a new access token for a valid refresh token. 4. Grant Type == &lt;code&gt;client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. 5. Grant Type == &lt;code&gt;urn:ietf:params:oauth:grant-type:extend_client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. It only allows publisher/studio namespace client. In generated token: 1. There wil be no roles, namespace_roles &amp; permission. 2. The scope will be fixed as &#39;extend&#39;. 3. There will have a new field &#39;extend_namespace&#39;, the value is from token request body. 6. Grant Type == &lt;code&gt;urn:ietf:params:oauth:grant-type:login_queue_ticket&lt;/code&gt;: It generates a token by validating the login queue ticket against login queue service. ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - 8: Suspicious Login - **aud**. The aud is the targeted resource server. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **client_id**. The UserID. The sub is omitted if the token is generated from client credential - **scope**. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. ## Device Cookie Validation _**For grant type &#34;password&#34; only**_ Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;. This endpoint will read device cookie from request header **Auth-Trust-Id**. If device cookie not found, it will generate a new one and set it into response body **auth_trust_id** when successfully login. ## Track Login History This endpoint will track login history to detect suspicious login activity, please provide **Device-Id** (alphanumeric) in request header parameter otherwise it will set to &#34;unknown&#34;. Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default&#34; ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token ## Response note If it is a user token request and user hasn&#39;t accepted required legal policy, the field &lt;code&gt;is_comply&lt;/code&gt; will be false in response and responsed token will have no permission. action code: 10703
   *
   * #### Response type:
   * - `TokenWithDeviceCookieResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthToken_v4(
    data: {
      grant_type:
        | 'authorization_code'
        | 'client_credentials'
        | 'password'
        | 'refresh_token'
        | 'urn:ietf:params:oauth:grant-type:extend_client_credentials'
        | 'urn:ietf:params:oauth:grant-type:login_queue_ticket'
      additionalData?: string | null
      client_id?: string | null
      client_secret?: string | null
      code?: string | null
      code_verifier?: string | null
      extendNamespace?: string | null
      extend_exp?: boolean | null
      login_queue_ticket?: string | null
      password?: string | null
      redirect_uri?: string | null
      refresh_token?: string | null
      username?: string | null
    },
    queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
  ): Promise<Response<unknown>> {
    const params = { code_challenge_method: 'plain', ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Verify 2FA code This endpoint is used for verifying 2FA code. ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthMfaVerify_v4(data: {
    code: string | null
    factor: string | null
    mfaToken: string | null
    rememberDevice: boolean | null
  }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/oauth/mfa/verify'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is being used to create headless account after 3rd platform authenticated, and response token . The &#39;linkingToken&#39; in request body is received from &#34;/platforms/{platformId}/token&#34; when 3rd platform account is not linked to justice account yet.
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthHeadlesToken_v4(data: {
    linkingToken: string | null
    additionalData?: string | null
    extend_exp?: boolean | null
  }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/oauth/headless/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is being used to generate target token. It requires basic header with ClientID and Secret, it should match the ClientID when call &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt; The code should be generated from &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt;.
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthTokenExchange_v4(data: { code: string | null; additionalData?: string | null }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/oauth/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * # This endpoint is in ALPHA, avoid using this endpoint fow now, reach out to AB support for inquiries Simultaneous login flow. The primary goals of this project are to entitle players to authenticate on a native PC platform(Steam/Epic) and the PlayStation platform, link their accounts, and provide support for platform sync with a valid 3rd platform access token. ## Given a valid native ticket and empty simultaneous ticket, these cases will be failed - Native ticket&#39;s account is not linked AGS account yet - Native ticket&#39;s account is linked AGS account, but AGS account is not linked simultaneous platform yet - Native ticket&#39;s account is linked AGS account, AGS account is linked simultaneous platform but there is no available simultaneous token.(only if this platform is expected to store the platform token) ## Given a valid native ticket and empty simultaneous ticket, this case will be success - Native ticket&#39;s account already linked AGS account, this AGS account already linked simultaneous platform. There is valid simultaneous token.(this is required only when this simultaneous is expected to cache platform token) ## Given a valid native ticket token and valid simultaneous ticket, these cases will be failed #### Native ticket&#39;s account is already linked with AGS account - Native linked AGS account is linked this simultaneous platform but is different with simultaneous ticket&#39;s account - Native linked AGS account is not linked with simultaneous but has a linking history with simultaneous platform and it is different with simultaneous ticket&#39;s account #### Native ticket&#39;s account is not linked with AGS account and Simultaneous ticket&#39;s account is already linked wth AGS account - Simultaneous linked AGS account is linked this native platform but is different with native ticket&#39;s account - Simultaneous linked AGS account is not linked with native but has a linking history with native platform and it is different with native ticket&#39;s account ## Given a valid native ticket and valid simultaneous ticket, these cases will be success - Native ticket&#39;s account &amp; Simultaneous ticket&#39;s account are both not linked to AGS account yet - Native ticket&#39;s account &amp; Simultaneous ticket&#39;s account are already linked to same AGS account
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthSimultaneousLogin_v4(
    data: {
      nativePlatform: 'epicgames' | 'steam'
      nativePlatformTicket: string | null
      simultaneousPlatform?: string | null
      simultaneousTicket?: string | null
    },
    queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
  ): Promise<Response<unknown>> {
    const params = { code_challenge_method: 'plain', ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/oauth/simultaneousLogin'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This endpoint is being used to authenticate a user account and perform platform link. It validates user&#39;s email / username and password. If user already enable 2FA, then invoke _/mfa/verify_ using **mfa_token** from this endpoint response. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postOauthAuthenticateWithLink_v4(data: {
    client_id: string | null
    linkingToken: string | null
    password: string | null
    username: string | null
    extend_exp?: boolean | null
  }): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/oauth/authenticateWithLink'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Platform token grant specifically used for performing token grant using platform, e.g. Steam, Justice, etc. The endpoint automatically create an account if the account associated with the platform is not exists yet. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. For publisher-game namespace schema : Specify only either platform_token or device_id. Device token grant should be requested along with device_id parameter against game namespace. Another 3rd party platform token grant should be requested along with platform_token parameter against publisher namespace. ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token ## Supported platforms: - **steam**: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: &lt;code&gt;{identity}:{ticket}&lt;/code&gt;, the &lt;code&gt;{identity}&lt;/code&gt; was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain &lt;code&gt;:&lt;/code&gt; in this &lt;code&gt;{identity}&lt;/code&gt;. - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The platform_token&#39;s value is URL generated by Steam on web authentication - **facebook**: The platform_token’s value is the authorization code returned by Facebook OAuth - **google**: The platform_token’s value is the authorization code or idToken returned by Google OAuth - **googleplaygames**: The platform_token’s value is the authorization code or idToken returned by Google play games OAuth - **oculus**: The platform_token’s value is a string composed of Oculus&#39;s user ID and the nonce separated by a colon (:). - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **discord**: The platform_token’s value is the authorization code returned by Discord OAuth - **android**: The device_id is the Android’s device ID - **ios**: The device_id is the iOS’s device ID. - **apple**: The platform_token’s value is the authorization code or idToken returned by Apple OAuth.(We will use this code to generate APP token) - **device**: Every device that does’nt run Android and iOS is categorized as a device. The device_id is the device’s ID. - **justice**: The platform_token’s value is the designated user’s access token. - **epicgames**: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **nintendo**: The platform_token’s value is the id_token returned by Nintendo OAuth. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **xblweb**: The platform_token’s value is code returned by xbox after login - **netflix**: The platform_token’s value is GAT (Gamer Access Token) returned by Netflix backend - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken. ## Account Group Several platforms are grouped under account groups. The accounts on these platforms have the same platform user id. Login using one of these platform will returns the same IAM user. Following is the current registered account grouping: - Steam group(steamnetwork): - steam - steamopenid - PSN group(psn) - ps4web - ps4 - ps5 - XBOX group(xbox) - live - xblweb - Oculus group(oculusgroup) - oculus - oculusweb ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - 8: Suspicious Login - **aud**. The aud is the client ID. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **sub**. The UserID. The sub is omitted if the token is generated from client credential ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. action code : 10704
   *
   * #### Response type:
   * - `TokenResponseV3`
   * - `LoginQueueTicketResponse`
   */
  postTokenOauth_ByPlatformId_v4(
    platformId: string,
    data: {
      additionalData?: string | null
      client_id?: string | null
      createHeadless?: boolean | null
      device_id?: string | null
      macAddress?: string | null
      platform_token?: string | null
      serviceLabel?: number
      skipSetCookie?: boolean | null
    },
    queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
  ): Promise<Response<unknown>> {
    const params = { code_challenge_method: 'plain', ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/oauth/platforms/{platformId}/token'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
