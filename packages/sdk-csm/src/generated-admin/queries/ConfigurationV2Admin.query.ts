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
import { ConfigurationV2AdminApi } from '../ConfigurationV2AdminApi.js'

import { GetListOfConfigurationsV2Response } from '../../generated-definitions/GetListOfConfigurationsV2Response.js'
import { SaveConfigurationV2Request } from '../../generated-definitions/SaveConfigurationV2Request.js'
import { SaveConfigurationV2Response } from '../../generated-definitions/SaveConfigurationV2Response.js'
import { SaveSecretConfigurationV2Request } from '../../generated-definitions/SaveSecretConfigurationV2Request.js'
import { UpdateConfigurationV2Request } from '../../generated-definitions/UpdateConfigurationV2Request.js'
import { UpdateConfigurationV2Response } from '../../generated-definitions/UpdateConfigurationV2Response.js'
import { UpdateSecretConfigurationV2Request } from '../../generated-definitions/UpdateSecretConfigurationV2Request.js'

export enum Key_ConfigurationV2Admin {
  Secrets_ByApp_v2 = 'Csm.ConfigurationV2Admin.Secrets_ByApp_v2',
  Secret_ByApp_v2 = 'Csm.ConfigurationV2Admin.Secret_ByApp_v2',
  Variables_ByApp_v2 = 'Csm.ConfigurationV2Admin.Variables_ByApp_v2',
  Variable_ByApp_v2 = 'Csm.ConfigurationV2Admin.Variable_ByApp_v2',
  Secret_ByApp_ByConfigId_v2 = 'Csm.ConfigurationV2Admin.Secret_ByApp_ByConfigId_v2',
  Variable_ByApp_ByConfigId_v2 = 'Csm.ConfigurationV2Admin.Variable_ByApp_ByConfigId_v2'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Secrets_ByApp_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_GetSecrets_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetListOfConfigurationsV2Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetListOfConfigurationsV2Response>) => void
): UseQueryResult<GetListOfConfigurationsV2Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationV2AdminApi_GetSecrets_ByApp_v2>[1]) => async () => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getSecrets_ByApp_v2(input.app, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetListOfConfigurationsV2Response, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationV2Admin.Secrets_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Secret will always be masked. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Secret_ByApp_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_CreateSecret_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SaveConfigurationV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: SaveSecretConfigurationV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: SaveConfigurationV2Response) => void
): UseMutationResult<
  SaveConfigurationV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: SaveSecretConfigurationV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SaveSecretConfigurationV2Request }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createSecret_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Secret_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Variables_ByApp_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_GetVariables_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetListOfConfigurationsV2Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetListOfConfigurationsV2Response>) => void
): UseQueryResult<GetListOfConfigurationsV2Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationV2AdminApi_GetVariables_ByApp_v2>[1]) => async () => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getVariables_ByApp_v2(input.app, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetListOfConfigurationsV2Response, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationV2Admin.Variables_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Variable_ByApp_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_CreateVariable_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SaveConfigurationV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: SaveConfigurationV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: SaveConfigurationV2Response) => void
): UseMutationResult<
  SaveConfigurationV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: SaveConfigurationV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SaveConfigurationV2Request }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createVariable_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Variable_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret by its config id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Secret_ByApp_ByConfigId_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_DeleteSecret_ByApp_ByConfigIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSecret_ByApp_ByConfigId_v2(input.app, input.configId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Secret_ByApp_ByConfigId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Secret will always be masked. Request body: - value : configuration value - Required. - description : description of the configuration - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Secret_ByApp_ByConfigId_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_UpdateSecret_ByApp_ByConfigIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateConfigurationV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; configId: string; data: UpdateSecretConfigurationV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateConfigurationV2Response) => void
): UseMutationResult<
  UpdateConfigurationV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; configId: string; data: UpdateSecretConfigurationV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string; data: UpdateSecretConfigurationV2Request }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSecret_ByApp_ByConfigId_v2(input.app, input.configId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Secret_ByApp_ByConfigId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable by its config id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Variable_ByApp_ByConfigId_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_DeleteVariable_ByApp_ByConfigIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteVariable_ByApp_ByConfigId_v2(input.app, input.configId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Variable_ByApp_ByConfigId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationV2Admin.Variable_ByApp_ByConfigId_v2, input]
 * }
 * ```
 */
export const useConfigurationV2AdminApi_UpdateVariable_ByApp_ByConfigIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateConfigurationV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateConfigurationV2Response) => void
): UseMutationResult<
  UpdateConfigurationV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV2Request }) => {
    const response = await ConfigurationV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateVariable_ByApp_ByConfigId_v2(input.app, input.configId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationV2Admin.Variable_ByApp_ByConfigId_v2],
    mutationFn,
    ...options
  })
}
