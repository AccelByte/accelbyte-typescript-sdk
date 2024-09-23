/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { TokenWithDeviceCookieResponseV3 } from '~/iam-definitions/TokenWithDeviceCookieResponseV3'
import { CodeGenUtil } from '../utils/CodeGenUtil'
import { Response, Validate } from '../utils/Validate'

export { TokenWithDeviceCookieResponseV3 }

/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class OAuth20$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance) {}

  postOauthToken<T = TokenWithDeviceCookieResponseV3>(data: {
    grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token'
    username?: string | null
    password?: string | null
    code?: string | null
    code_verifier?: string | null
    client_id?: string | null
    redirect_uri?: string | null
    refresh_token?: string | null
    extend_exp?: boolean | null
  }): Promise<Response<T>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenWithDeviceCookieResponseV3, 'TokenWithDeviceCookieResponseV3')
  }
}

export class OAuth20V4$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance) {}

  /**
   * This endpoint supports grant type: 1. Grant Type == &lt;code&gt;authorization_code&lt;/code&gt;: It generates the user token by given the authorization code which generated in &#34;/iam/v3/authenticate&#34; API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request. 2. Grant Type == &lt;code&gt;password&lt;/code&gt;: The grant type to use for authenticating a user, whether it&#39;s by email / username and password combination or through platform. 3. Grant Type == &lt;code&gt;refresh_token&lt;/code&gt;: Used to get a new access token for a valid refresh token. 4. Grant Type == &lt;code&gt;client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. 5. Grant Type == &lt;code&gt;urn:ietf:params:oauth:grant-type:extend_client_credentials&lt;/code&gt;: It generates a token by checking the client credentials provided through Authorization header. It only allows publisher/studio namespace client. In generated token: 1. There wil be no roles, namespace_roles &amp; permission. 2. The scope will be fixed as &#39;extend&#39;. 3. There will have a new field &#39;extend_namespace&#39;, the value is from token request body. 6. Grant Type == &lt;code&gt;urn:ietf:params:oauth:grant-type:login_queue_ticket&lt;/code&gt;: It generates a token by validating the login queue ticket against login queue service. ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - 8: Suspicious Login - **aud**. The aud is the targeted resource server. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **client_id**. The UserID. The sub is omitted if the token is generated from client credential - **scope**. The scope of the access request, expressed as a list of space-delimited, case-sensitive strings ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. ## Device Cookie Validation _**For grant type &#34;password&#34; only**_ Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;. This endpoint will read device cookie from request header **Auth-Trust-Id**. If device cookie not found, it will generate a new one and set it into response body **auth_trust_id** when successfully login. ## Track Login History This endpoint will track login history to detect suspicious login activity, please provide **Device-Id** (alphanumeric) in request header parameter otherwise it will set to &#34;unknown&#34;. Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default&#34; ## 2FA remember device To remember device for 2FA, should provide cookie: device_token or header: Device-Token ## Response note If it is a user token request and user hasn&#39;t accepted required legal policy, the field &lt;code&gt;is_comply&lt;/code&gt; will be false in response and responsed token will have no permission. action code: 10703
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
  ): Promise<Response<TokenWithDeviceCookieResponseV3>> {
    const params = { code_challenge_method: 'plain', ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/oauth/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenWithDeviceCookieResponseV3, 'TokenWithDeviceCookieResponseV3')
  }
}
