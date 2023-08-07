/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CountryLocationResponse } from '../definitions/CountryLocationResponse.js'
import { GameTokenCodeResponse } from '../definitions/GameTokenCodeResponse.js'
import { OneTimeLinkingCodeResponse } from '../definitions/OneTimeLinkingCodeResponse.js'
import { OneTimeLinkingCodeValidationResponse } from '../definitions/OneTimeLinkingCodeValidationResponse.js'
import { PlatformTokenRefreshResponseV3 } from '../definitions/PlatformTokenRefreshResponseV3.js'
import { TokenResponseV3 } from '../definitions/TokenResponseV3.js'

export class OAuth20Extension$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * &lt;p&gt;This endpoint is used to remove &lt;b&gt;access_token&lt;/b&gt;, &lt;b&gt;refresh_token&lt;/b&gt; from cookie and revoke token from usage.&lt;/p&gt; &lt;p&gt;Supported methods:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;VerifyToken to verify token from header&lt;/li&gt; &lt;li&gt;AddTokenToRevocationList to revoke token with TTL&lt;/li&gt; &lt;/ul&gt;
   */
  createLogout(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/logout'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This endpoint is being used to authenticate a user account. It validates user&#39;s email / username and password. Deactivated or login-banned users are unable to login. Redirect URI and Client ID must be specified as a pair and only used to redirect to the specified redirect URI in case the requestId is no longer valid. &lt;h2&gt;Device Cookie Validation&lt;/h2&gt; Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;. This endpoint will read device cookie from cookie &lt;b&gt;auth-trust-id&lt;/b&gt;. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate. Action code: 10801
   */
  postAuthenticate(data: {
    password: string | null
    request_id: string | null
    user_name: string | null
    client_id?: string | null
    extend_exp?: boolean | null
    redirect_uri?: string | null
  }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;This endpoint is being used to create headless account after 3rd platform authenticated, and response token . The &#39;linkingToken&#39; in request body is received from &#34;/platforms/{platformId}/token&#34; when 3rd platform account is not linked to justice account yet.&#39;&lt;/p&gt;
   */
  postHeadlesToken(data: {
    linkingToken: string | null
    additionalData?: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<TokenResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/headless/token'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3, 'TokenResponseV3')
  }

  /**
   * &lt;p&gt;This endpoint is being used to generate publisher user&#39;s game token.&lt;br&gt; It require basic header with ClientID and Secret, it should match the ClientID when call &lt;strong&gt;/iam/v3/namespace/{namespace}/token/request&lt;/strong&gt;&lt;br&gt; It required a code which can be generated from &lt;strong&gt;/iam/v3/namespace/{namespace}/token/request&lt;/strong&gt;.&lt;br&gt; &lt;/p&gt;
   */
  postTokenExchange(data: { code: string | null; additionalData?: string | null }): Promise<IResponse<TokenResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3, 'TokenResponseV3')
  }

  /**
   * &lt;p&gt;This endpoint get country location based on the request.&lt;/p&gt;
   */
  getLocationCountry(): Promise<IResponseWithSync<CountryLocationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/location/country'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, CountryLocationResponse, 'CountryLocationResponse')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint is being used to request the one time code [8 length] for headless account to link or upgrade to a full account.&lt;br&gt; It require a valid user token.&lt;br&gt; Should specify the target platform id and current user should already linked to this platform.&lt;br&gt; Current user should be a headless account.&lt;br&gt; &lt;h2&gt;Supported platforms:&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;&lt;strong&gt;steam&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;steamopenid&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;facebook&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;google&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;oculus&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;twitch&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;discord&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;android&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ios&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;apple&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;device&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;justice&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;epicgames&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps4&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps5&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;nintendo&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;awscognito&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;live&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;xblweb&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;netflix&lt;/strong&gt;&lt;/li&gt; &lt;li&gt;&lt;strong&gt;snapchat&lt;/strong&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt;
   */
  postLinkCodeRequest(data: { platformId: string | null }): Promise<IResponse<OneTimeLinkingCodeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/code/request'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, OneTimeLinkingCodeResponse, 'OneTimeLinkingCodeResponse')
  }

  /**
   * &lt;p&gt;This endpoint is being used to validate one time link code.&lt;br&gt;&lt;/p&gt;
   */
  postLinkCodeValidate(data: { oneTimeLinkCode: string | null }): Promise<IResponse<OneTimeLinkingCodeValidationResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/code/validate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, OneTimeLinkingCodeValidationResponse, 'OneTimeLinkingCodeValidationResponse')
  }

  /**
   * &lt;p&gt;This endpoint is being used to generate user&#39;s token by one time link code.&lt;br&gt; It require publisher ClientID&lt;br&gt; It required a code which can be generated from &lt;strong&gt;/iam/v3/link/code/request&lt;/strong&gt;.&lt;br&gt; &lt;/p&gt; &lt;p&gt;This endpoint support creating transient token by utilizing &lt;strong&gt;isTransient&lt;/strong&gt; param: &lt;br&gt;&lt;strong&gt;isTransient=true&lt;/strong&gt; will generate a transient token with a short Time Expiration and without a refresh token &lt;br&gt;&lt;strong&gt;isTransient=false&lt;/strong&gt; will consume the one-time code and generate the access token with a refresh token.&lt;/p&gt;
   */
  postLinkTokenExchange(data: {
    client_id: string | null
    oneTimeLinkCode: string | null
    additionalData?: string | null
    isTransient?: boolean | null
  }): Promise<IResponse<TokenResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/link/token/exchange'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3, 'TokenResponseV3')
  }

  /**
   * This endpoint is being used to authenticate a user account and perform platform link. It validates user&#39;s email / username and password. If user already enable 2FA, then invoke &lt;i&gt;/mfa/verify&lt;/i&gt; using &lt;b&gt;mfa_token&lt;/b&gt; from this endpoint response. &lt;h2&gt;Device Cookie Validation&lt;/h2&gt; Device Cookie is used to protect the user account from brute force login attack, &lt;a target=&#34;_blank&#34; href=&#34;https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies&#34;&gt;more detail from OWASP&lt;a&gt;. This endpoint will read device cookie from cookie &lt;b&gt;auth-trust-id&lt;/b&gt;. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
   */
  postAuthenticateWithLink(data: {
    client_id: string | null
    linkingToken: string | null
    password: string | null
    username: string | null
    extend_exp?: boolean | null
  }): Promise<IResponse<TokenResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/authenticateWithLink'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, TokenResponseV3, 'TokenResponseV3')
  }

  /**
   * &lt;p&gt;This endpoint is being used to request the code to generate publisher user&#39;s game token.&lt;br&gt; It require a valid user token with publisher namespace.&lt;br&gt; Path namespace should be a game namespace.&lt;br&gt; Client ID should match the target namespace. It response a code and it can be consumed by &lt;strong&gt;/iam/v3/token/exchange&lt;/strong&gt; &lt;/p&gt;
   */
  postTokenRequest(data: { client_id: string | null }): Promise<IResponse<GameTokenCodeResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/namespace/{namespace}/token/request'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, GameTokenCodeResponse, 'GameTokenCodeResponse')
  }

  /**
   * This endpoint authenticates user platform. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. &lt;br&gt; &lt;p&gt;If already linked with justice account or match SSO condition, will redirect to client&#39;s redirect url with code. then invoke &#39;/iam/v3/oauth/token&#39; with grant_type=authorization_code&lt;/p&gt; &lt;p&gt;If already not linked with justice account and not match SSO condition, will redirect to client&#39;s account linking page&lt;/p&gt; &lt;h2&gt;Supported platforms:&lt;/h2&gt;&lt;ul&gt; &lt;li&gt;&lt;strong&gt;steamopenid&lt;/strong&gt;&lt;/li&gt;Steam login page will redirects to this endpoint after login success as previously defined on openID request parameter &lt;code&gt;openid.return_to&lt;/code&gt; when request login to steam https://openid.net/specs/openid-authentication-2_0.html#anchor27 &lt;li&gt;&lt;strong&gt;ps4web&lt;/strong&gt;&lt;/li&gt;PS4 login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; https://ps4.siedev.net/resources/documents/WebAPI/1/Auth_WebAPI-Reference/0002.html#0GetAccessTokenUsingAuthorizationCode &lt;li&gt;&lt;strong&gt;xblweb&lt;/strong&gt;&lt;/li&gt;XBL login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;li&gt;&lt;strong&gt;epicgames&lt;/strong&gt;&lt;/li&gt;Epicgames login page will redirects to this endpoint after login success or an error occurred. If error, it redirects to the login page. &lt;li&gt;&lt;strong&gt;twitch&lt;/strong&gt;&lt;/li&gt;Twitch login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;li&gt;&lt;strong&gt;facebook&lt;/strong&gt;&lt;/li&gt;Facebook login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;li&gt;&lt;strong&gt;google&lt;/strong&gt;&lt;/li&gt;Google login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;li&gt;&lt;strong&gt;snapchat&lt;/strong&gt;&lt;/li&gt;Snapchat login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;li&gt;&lt;strong&gt;discord&lt;/strong&gt;&lt;/li&gt;Discord login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; &lt;/ul&gt; action code : 10709
   */
  getAuthenticate_ByPlatformId(
    platformId: string,
    queryParams: {
      state: string | null
      code?: string | null
      error?: string | null
      assoc_handle?: string | null
      claimed_id?: string | null
      identity?: string | null
      mode?: string | null
      ns?: string | null
      op_endpoint?: string | null
      response_nonce?: string | null
      return_to?: string | null
      sig?: string | null
      signed?: string | null
    }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/platforms/{platformId}/authenticate'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * &lt;p&gt;This endpoint will validate the third party platform token, for some platforms will also refresh the token stored in IAM, it will not generate any event or AB access/refresh token.&lt;/p&gt; &lt;p&gt;This endpoint can be used by game client to refresh third party token if game client got platform token not found error, for example got 404 platform token not found from IAP/DLC.&lt;/p&gt; &lt;h2&gt;Platforms will refresh stored token:&lt;/h2&gt; &lt;ul&gt; &lt;li&gt;&lt;strong&gt;twitch&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Twitch OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;epicgames&lt;/strong&gt;: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps4&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Sony OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;ps5&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Sony OAuth.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;amazon&lt;/strong&gt;: The platform_token’s value is authorization code.&lt;/li&gt; &lt;li&gt;&lt;strong&gt;awscognito&lt;/strong&gt;: The platform_token’s value is the aws cognito access token or id token (JWT).&lt;/li&gt; &lt;li&gt;&lt;strong&gt;live&lt;/strong&gt;: The platform_token’s value is xbox XSTS token&lt;/li&gt; &lt;li&gt;&lt;strong&gt;snapchat&lt;/strong&gt;: The platform_token’s value is the authorization code returned by Snapchat OAuth.&lt;/li&gt; &lt;br&gt;&lt;li&gt;&lt;strong&gt;for specific generic oauth (OIDC)&lt;/strong&gt;: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.&lt;/li&gt; &lt;/ul&gt;
   */
  postTokenVerifyV3_ByPlatformId(
    platformId: string,
    data: { platform_token: string | null }
  ): Promise<IResponse<PlatformTokenRefreshResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/v3/platforms/{platformId}/token/verify'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => resultPromise, PlatformTokenRefreshResponseV3, 'PlatformTokenRefreshResponseV3')
  }
}
