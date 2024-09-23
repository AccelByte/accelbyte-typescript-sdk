/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { ClientsAdminApi } from '../ClientsAdminApi.js'

import { ClientCreationV3Request } from '../../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../../generated-definitions/ClientV3Response.js'
import { ClientsUpdateRequestV3 } from '../../generated-definitions/ClientsUpdateRequestV3.js'
import { ClientsV3Response } from '../../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../../generated-definitions/V3ClientUpdateSecretRequest.js'

export enum Key_ClientsAdmin {
  Clients_v3 = 'Iam.ClientsAdmin.Clients_v3',
  Client_v3 = 'Iam.ClientsAdmin.Client_v3',
  Secret_ByClientId_v3 = 'Iam.ClientsAdmin.Secret_ByClientId_v3',
  Client_ByClientId_v3 = 'Iam.ClientsAdmin.Client_ByClientId_v3',
  Permission_ByClientId_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_v3',
  Permission_ByClientId_ByNS_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_ByNS_v3',
  Permission_ByClientId_ByResource_ByAction_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_ByResource_ByAction_v3'
}

/**
 * action code: 10308
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Clients_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_GetClients_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: {
      clientId?: string | null
      clientName?: string | null
      clientType?: string | null
      limit?: number
      offset?: number
      skipLoginQueue?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<ClientsV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientsV3Response>) => void
): UseQueryResult<ClientsV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsAdminApi_GetClients_v3>[1]) => async () => {
    const response = await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getClients_v3(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientsV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Clients_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Add a new OAuth 2.0 client A new client automatically granted with these scopes: commerce, account, analytics, publishing, social. **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10301 **Fields Description:** - **clientId** : The client ID. e.g f815e5c44f364993961be3b3f26a7bf4 - **clientName** : The client name. e.g E-commerce - **secret** : The client&#39;s secret. It&#39;s empty if the client&#39;s type is a public client. Otherwise, the client secret is required - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. e.g https://example.net/platform - **oauthClientType** : The OAuth 2.0 client type. The client type determines whether the authorization needs Proof Of Key Exchange or not. A public client type doesn&#39;t have a client secret and should use PKCE flow. A confidential client type has a client secret and don&#39;t use PKCE flow Supported oAuthClientType : - **Public** - **Confidential** - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used for making sure the token is intended to be used by the client. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). default value: true - **clientPlatform**: available client platform (optional). default value: &#34;&#34; - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, default value: SECONDS - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, default value: SECONDS
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Client_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_CreateClientMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreationV3Request }>,
    'mutationKey'
  >,
  callback?: (data: ClientV3Response) => void
): UseMutationResult<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreationV3Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientCreationV3Request }) => {
    const response = await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createClient_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_v3],
    mutationFn,
    ...options
  })
}

/**
 * Updates multiple OAuth 2.0 clients. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified - **skipLoginQueue**: a flag to indicate whether this client should be exempted from login queue or not
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Client_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_UpdateClientMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientsUpdateRequestV3 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientsUpdateRequestV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientsUpdateRequestV3 }) => {
    const response = await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateClient_v3(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_v3],
    mutationFn,
    ...options
  })
}

/**
 * Update Client Secret
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Secret_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_UpdateSecret_ByClientIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: V3ClientUpdateSecretRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: V3ClientUpdateSecretRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: V3ClientUpdateSecretRequest }) => {
    const response = await ClientsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSecret_ByClientId_v3(input.clientId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Secret_ByClientId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code : 10310
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_DeleteClient_ByClientIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string }) => {
    const response = await ClientsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClient_ByClientId_v3(input.clientId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId_v3],
    mutationFn,
    ...options
  })
}

/**
 * action code: 10309
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_GetClient_ByClientId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { clientId: string },
  options?: Omit<UseQueryOptions<ClientV3Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ClientV3Response>) => void
): UseQueryResult<ClientV3Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useClientsAdminApi_GetClient_ByClientId_v3>[1]) => async () => {
    const response = await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getClient_ByClientId_v3(
      input.clientId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ClientV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Updates an OAuth 2.0 client. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified - **skipLoginQueue**: a flag to indicate whether this client should be exempted from login queue or not
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_PatchClient_ByClientIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateV3Request }>,
    'mutationKey'
  >,
  callback?: (data: ClientV3Response) => void
): UseMutationResult<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientUpdateV3Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientUpdateV3Request }) => {
    const response = await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchClient_ByClientId_v3(
      input.clientId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId_v3],
    mutationFn,
    ...options
  })
}

/**
 * **Note for Multi Tenant Mode:** This is for super admin only. action code: 10303
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Permission_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_UpdatePermission_ByClientIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }) => {
    const response = await ClientsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByClientId_v3(input.clientId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_v3],
    mutationFn,
    ...options
  })
}

/**
 * **Note for Multi Tenant Mode:** This is for super admin only. action code: 10307
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Permission_ByClientId_ByNS_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_UpdatePermission_ByClientId_ByNSMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; data: ClientPermissionsV3 }) => {
    const response = await ClientsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updatePermission_ByClientId_ByNS_v3(input.clientId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_ByNS_v3],
    mutationFn,
    ...options
  })
}

/**
 * **Note for Multi Tenant Mode:** This is for super admin only. action code : 10304
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Permission_ByClientId_ByResource_ByAction_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_DeletePermission_ByClientId_ByResource_ByActionMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId: string; resource: string; action: number }> => {
  const mutationFn = async (input: SdkSetConfigParam & { clientId: string; resource: string; action: number }) => {
    const response = await ClientsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deletePermission_ByClientId_ByResource_ByAction_v3(input.clientId, input.resource, input.action)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_ByResource_ByAction_v3],
    mutationFn,
    ...options
  })
}
