/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { OAuth20ExtensionApi } from '../OAuth20ExtensionApi.js'

import { CountryLocationResponse } from '../../generated-definitions/CountryLocationResponse.js'
import { OneTimeLinkingCodeResponse } from '../../generated-definitions/OneTimeLinkingCodeResponse.js'
import { OneTimeLinkingCodeValidationResponse } from '../../generated-definitions/OneTimeLinkingCodeValidationResponse.js'
import { PlatformTokenRefreshResponseV3 } from '../../generated-definitions/PlatformTokenRefreshResponseV3.js'
import { TargetTokenCodeResponse } from '../../generated-definitions/TargetTokenCodeResponse.js'
import { TokenResponseV3 } from '../../generated-definitions/TokenResponseV3.js'

export enum Key_OAuth20Extension {
  Logout_v3 = 'Iam.OAuth20Extension.Logout_v3',
  Authenticate_v3 = 'Iam.OAuth20Extension.Authenticate_v3',
  HeadlesToken_v3 = 'Iam.OAuth20Extension.HeadlesToken_v3',
  TokenExchange_v3 = 'Iam.OAuth20Extension.TokenExchange_v3',
  UpgradeForward_v3 = 'Iam.OAuth20Extension.UpgradeForward_v3',
  LocationCountry_v3 = 'Iam.OAuth20Extension.LocationCountry_v3',
  LinkCodeRequest_v3 = 'Iam.OAuth20Extension.LinkCodeRequest_v3',
  LinkCodeValidate_v3 = 'Iam.OAuth20Extension.LinkCodeValidate_v3',
  LinkTokenExchange_v3 = 'Iam.OAuth20Extension.LinkTokenExchange_v3',
  AuthenticateWithLink_v3 = 'Iam.OAuth20Extension.AuthenticateWithLink_v3',
  AuthenticateWithLinkForward_v3 = 'Iam.OAuth20Extension.AuthenticateWithLinkForward_v3',
  TokenRequest_v3 = 'Iam.OAuth20Extension.TokenRequest_v3',
  Authenticate_ByPlatformId_v3 = 'Iam.OAuth20Extension.Authenticate_ByPlatformId_v3',
  TokenVerify_ByPlatformId_v3 = 'Iam.OAuth20Extension.TokenVerify_ByPlatformId_v3'
}

/**
 * This endpoint is used to remove **access_token**, **refresh_token** from cookie.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.Logout_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_CreateLogoutMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createLogout_v3()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.Logout_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to authenticate a user account. It validates user&#39;s email / username and password. Deactivated or login-banned users are unable to login. Redirect URI and Client ID must be specified as a pair and only used to redirect to the specified redirect URI in case the requestId is no longer valid. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate. Action code: 10801
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.Authenticate_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostAuthenticateMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: {
          password: string | null
          request_id: string | null
          user_name: string | null
          client_id?: string | null
          extend_exp?: boolean | null
          redirect_uri?: string | null
        }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: {
      password: string | null
      request_id: string | null
      user_name: string | null
      client_id?: string | null
      extend_exp?: boolean | null
      redirect_uri?: string | null
    }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: {
        password: string | null
        request_id: string | null
        user_name: string | null
        client_id?: string | null
        extend_exp?: boolean | null
        redirect_uri?: string | null
      }
    }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postAuthenticate_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.Authenticate_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to create headless account after 3rd platform authenticated, and response token . The &#39;linkingToken&#39; in request body is received from &#34;/platforms/{platformId}/token&#34; when 3rd platform account is not linked to justice account yet.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.HeadlesToken_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostHeadlesTokenMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TokenResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { linkingToken: string | null; additionalData?: string | null; extend_exp?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TokenResponseV3) => void
): UseMutationResult<
  TokenResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { linkingToken: string | null; additionalData?: string | null; extend_exp?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: { linkingToken: string | null; additionalData?: string | null; extend_exp?: boolean | null } }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postHeadlesToken_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.HeadlesToken_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to generate target token. It requires basic header with ClientID and Secret, it should match the ClientID when call &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt; The code should be generated from &lt;code&gt;/iam/v3/namespace/{namespace}/token/request&lt;/code&gt;.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.TokenExchange_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostTokenExchangeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TokenResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { code: string | null; additionalData?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: TokenResponseV3) => void
): UseMutationResult<
  TokenResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { code: string | null; additionalData?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { code: string | null; additionalData?: string | null } }) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postTokenExchange_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenExchange_v3],
    mutationFn,
    ...options
  })
}

/**
 * In login website based flow, after account upgraded, we need this API to handle the forward
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.UpgradeForward_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostUpgradeForwardMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { client_id: string | null; upgrade_success_token: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { client_id: string | null; upgrade_success_token: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { client_id: string | null; upgrade_success_token: string | null } }) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postUpgradeForward_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.UpgradeForward_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint get country location based on the request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.LocationCountry_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_GetLocationCountry_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CountryLocationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryLocationResponse>) => void
): UseQueryResult<CountryLocationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOAuth20ExtensionApi_GetLocationCountry_v3>[1]) => async () => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getLocationCountry_v3()
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryLocationResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Extension.LocationCountry_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint is being used to request the one time code [8 length] for headless account to link or upgrade to a full account. Should specify the target platform id and current user should already linked to this platform. Current user should be a headless account. ## Supported platforms: - **steam** - **steamopenid** - **facebook** - **google** - **googleplaygames** - **oculus** - **twitch** - **discord** - **android** - **ios** - **apple** - **device** - **justice** - **epicgames** - **ps4** - **ps5** - **nintendo** - **awscognito** - **live** - **xblweb** - **netflix** - **snapchat**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.LinkCodeRequest_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostLinkCodeRequestMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      OneTimeLinkingCodeResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { platformId: string | null; redirectUri?: string | null; state?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: OneTimeLinkingCodeResponse) => void
): UseMutationResult<
  OneTimeLinkingCodeResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { platformId: string | null; redirectUri?: string | null; state?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: { platformId: string | null; redirectUri?: string | null; state?: string | null } }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLinkCodeRequest_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkCodeRequest_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to validate one time link code.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.LinkCodeValidate_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostLinkCodeValidateMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      OneTimeLinkingCodeValidationResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { oneTimeLinkCode: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: OneTimeLinkingCodeValidationResponse) => void
): UseMutationResult<
  OneTimeLinkingCodeValidationResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { oneTimeLinkCode: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { oneTimeLinkCode: string | null } }) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLinkCodeValidate_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkCodeValidate_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to generate user&#39;s token by one time link code. It requires a code which can be generated from &lt;code&gt;/iam/v3/link/code/request&lt;/code&gt; or &lt;code&gt;/iam/v3/public/users/me/link/forward&lt;/code&gt;. This endpoint support creating transient token by utilizing **isTransient** param: **isTransient=true** will generate a transient token with a short Time Expiration and without a refresh token **isTransient=false** will consume the one-time code and generate the access token with a refresh token.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.LinkTokenExchange_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostLinkTokenExchangeMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TokenResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: { client_id: string | null; oneTimeLinkCode: string | null; additionalData?: string | null; isTransient?: boolean | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: TokenResponseV3) => void
): UseMutationResult<
  TokenResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: { client_id: string | null; oneTimeLinkCode: string | null; additionalData?: string | null; isTransient?: boolean | null }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: { client_id: string | null; oneTimeLinkCode: string | null; additionalData?: string | null; isTransient?: boolean | null }
    }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postLinkTokenExchange_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkTokenExchange_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to authenticate a user account and perform platform link. It validates user&#39;s email / username and password. If user already enable 2FA, then invoke _/mfa/verify_ using **mfa_token** from this endpoint response. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.AuthenticateWithLink_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostAuthenticateWithLinkMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TokenResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: {
          client_id: string | null
          linkingToken: string | null
          password: string | null
          username: string | null
          extend_exp?: boolean | null
        }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: TokenResponseV3) => void
): UseMutationResult<
  TokenResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: {
      client_id: string | null
      linkingToken: string | null
      password: string | null
      username: string | null
      extend_exp?: boolean | null
    }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: {
        client_id: string | null
        linkingToken: string | null
        password: string | null
        username: string | null
        extend_exp?: boolean | null
      }
    }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postAuthenticateWithLink_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.AuthenticateWithLink_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to authenticate a user account and perform platform link. It validates user&#39;s email / username and password. If user already enable 2FA, then invoke _/mfa/verify_ using **mfa_token** from this endpoint response. ## Device Cookie Validation Device Cookie is used to protect the user account from brute force login attack, [more detail from OWASP](https://owasp.org/www-community/Slow_Down_Online_Guessing_Attacks_with_Device_Cookies). This endpoint will read device cookie from cookie **auth-trust-id**. If device cookie not found, it will generate a new one and set it into cookie when successfully authenticate.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.AuthenticateWithLinkForward_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostAuthenticateWithLinkForwardMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: {
          client_id: string | null
          linkingToken: string | null
          password: string | null
          username: string | null
          extend_exp?: boolean | null
        }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: {
      client_id: string | null
      linkingToken: string | null
      password: string | null
      username: string | null
      extend_exp?: boolean | null
    }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: {
        client_id: string | null
        linkingToken: string | null
        password: string | null
        username: string | null
        extend_exp?: boolean | null
      }
    }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postAuthenticateWithLinkForward_v3(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.AuthenticateWithLinkForward_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is being used to request the code to exchange a new token. The target new token&#39;s clientId should NOT be same with current using one. Path namespace should be target namespace. Client ID should match the target namespace. The code in response can be consumed by &lt;code&gt;/iam/v3/token/exchange&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.TokenRequest_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostTokenRequestMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      TargetTokenCodeResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        data: { client_id: string | null }
        queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: TargetTokenCodeResponse) => void
): UseMutationResult<
  TargetTokenCodeResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    data: { client_id: string | null }
    queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      data: { client_id: string | null }
      queryParams?: { code_challenge?: string | null; code_challenge_method?: 'S256' | 'plain' }
    }
  ) => {
    const response = await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).postTokenRequest_v3(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenRequest_v3],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint authenticates user platform. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. If already linked with justice account or match SSO condition, will redirect to client&#39;s redirect url with code. then invoke &#39;/iam/v3/oauth/token&#39; with grant_type=authorization_code If already not linked with justice account and not match SSO condition, will redirect to client&#39;s account linking page ## Supported platforms: - **steamopenid**Steam login page will redirects to this endpoint after login success as previously defined on openID request parameter &lt;code&gt;openid.return_to&lt;/code&gt; when request login to steam https://openid.net/specs/openid-authentication-2_0.html#anchor27 - **ps4web**PS4 login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; https://ps4.siedev.net/resources/documents/WebAPI/1/Auth_WebAPI-Reference/0002.html#0GetAccessTokenUsingAuthorizationCode - **xblweb**XBL login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **epicgames**Epicgames login page will redirects to this endpoint after login success or an error occurred. If error, it redirects to the login page. - **twitch**Twitch login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **facebook**Facebook login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **google**Google login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **snapchat**Snapchat login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; - **discord**Discord login page will redirects to this endpoint after login success as previously defined on authorize request parameter &lt;code&gt;redirect_uri&lt;/code&gt; action code : 10709
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.Authenticate_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_GetAuthenticate_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    platformId: string
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
  },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useOAuth20ExtensionApi_GetAuthenticate_ByPlatformId_v3>[1]) => async () => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getAuthenticate_ByPlatformId_v3(input.platformId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Extension.Authenticate_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This endpoint will validate the third party platform token, for some platforms will also refresh the token stored in IAM, it will not generate any event or AB access/refresh token. This endpoint can be used by game client to refresh third party token if game client got platform token not found error, for example got 404 platform token not found from IAP/DLC. ## Platforms will refresh stored token: - **twitch**: The platform_token’s value is the authorization code returned by Twitch OAuth. - **epicgames**: The platform_token’s value is an access-token or authorization code obtained from Epicgames EOS Account Service. - **ps4**: The platform_token’s value is the authorization code returned by Sony OAuth. - **ps5**: The platform_token’s value is the authorization code returned by Sony OAuth. - **amazon**: The platform_token’s value is authorization code. - **awscognito**: The platform_token’s value is the aws cognito access token or id token (JWT). - **live**: The platform_token’s value is xbox XSTS token - **snapchat**: The platform_token’s value is the authorization code returned by Snapchat OAuth. - **for specific generic oauth (OIDC)**: The platform_token’s value should be the same type as created OIDC auth type whether it is auth code, idToken or bearerToken.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20Extension.TokenVerify_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_PostTokenVerify_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformTokenRefreshResponseV3,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: { platform_token: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformTokenRefreshResponseV3) => void
): UseMutationResult<
  PlatformTokenRefreshResponseV3,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: { platform_token: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: { platform_token: string | null } }) => {
    const response = await OAuth20ExtensionApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).postTokenVerify_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenVerify_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
