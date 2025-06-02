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
import { ThirdPartyCredentialAdminApi } from '../ThirdPartyCredentialAdminApi.js'

import { CheckAvailabilityResponse } from '../../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainPatchRequest } from '../../generated-definitions/PlatformDomainPatchRequest.js'
import { PlatformDomainResponse } from '../../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'

export enum Key_ThirdPartyCredentialAdmin {
  Availability_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3',
  PlatformsAllClients_v3 = 'Iam.ThirdPartyCredentialAdmin.PlatformsAllClients_v3',
  PlatformsAllClientsActive_v3 = 'Iam.ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3',
  Client_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Client_ByPlatformId_v3',
  Clients_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3',
  ClientDomain_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3'
}

/**
 * This is the API to check specific 3rd party platform availability. Passing platform group name or it&#39;s member will return same platform availability data Supported third party platform and platform group: - PSN group(psn) - ps4web - ps4 - ps5
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetAvailability_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string },
  options?: Omit<UseQueryOptions<CheckAvailabilityResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CheckAvailabilityResponse>) => void
): UseQueryResult<CheckAvailabilityResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialAdminApi_GetAvailability_ByPlatformId_v3>[1]) => async () => {
      const response = await ThirdPartyCredentialAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAvailability_ByPlatformId_v3(input.platformId)
      callback && callback(response)
      return response.data
    }

  return useQuery<CheckAvailabilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Get All Active 3rd Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClients_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetPlatformsAllClients_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialAdminApi_GetPlatformsAllClients_v3>[1]) => async () => {
      const response = await ThirdPartyCredentialAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformsAllClients_v3()
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClients_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Get All Active 3rd Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetPlatformsAllClientsActive_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialAdminApi_GetPlatformsAllClientsActive_v3>[1]) => async () => {
      const response = await ThirdPartyCredentialAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getPlatformsAllClientsActive_v3()
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Delete 3rd Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_DeleteClient_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClient_ByPlatformId_v3(input.platformId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to Get 3rd Platform Credential.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetClients_ByPlatformId_v3 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { platformId: string },
  options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponse>) => void
): UseQueryResult<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useThirdPartyCredentialAdminApi_GetClients_ByPlatformId_v3>[1]) => async () => {
      const response = await ThirdPartyCredentialAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getClients_ByPlatformId_v3(input.platformId)
      callback && callback(response)
      return response.data
    }

  return useQuery<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType is **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info.**default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_PatchClient_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ThirdPartyLoginPlatformCredentialResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
): UseMutationResult<
  ThirdPartyLoginPlatformCredentialResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchClient_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType are **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info. **default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_CreateClient_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ThirdPartyLoginPlatformCredentialResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
): UseMutationResult<
  ThirdPartyLoginPlatformCredentialResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: ThirdPartyLoginPlatformCredentialRequest }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createClient_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to unregister 3rd Platform domain. If there is a ssoGroups in request body, then this request wil only delete the sso group from the target domain, it will not delete domain.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_DeleteClientDomain_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: PlatformDomainDeleteRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId: string; data: PlatformDomainDeleteRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: PlatformDomainDeleteRequest }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteClientDomain_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to patch update 3rd Platform domain. This API is a create or partial-update behavior. If it is update, it is a partial update behavior.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_PatchClientDomain_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformDomainResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: PlatformDomainPatchRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformDomainResponse) => void
): UseMutationResult<
  PlatformDomainResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: PlatformDomainPatchRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: PlatformDomainPatchRequest }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchClientDomain_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}

/**
 * This is the API to set 3rd Platform domain. This API is a create-or-update behavior. If it is update, it is a replacement behavior.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_UpdateClientDomain_ByPlatformIdMutation_v3 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformDomainResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { platformId: string; data: PlatformDomainUpdateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformDomainResponse) => void
): UseMutationResult<
  PlatformDomainResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { platformId: string; data: PlatformDomainUpdateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { platformId: string; data: PlatformDomainUpdateRequest }) => {
    const response = await ThirdPartyCredentialAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateClientDomain_ByPlatformId_v3(input.platformId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
