/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { ConfigurationAdminApi } from '../ConfigurationAdminApi.js'

import { GetListOfConfigurationsV1Response } from '../../generated-definitions/GetListOfConfigurationsV1Response.js'
import { SaveConfigurationV1Request } from '../../generated-definitions/SaveConfigurationV1Request.js'
import { SaveConfigurationV1Response } from '../../generated-definitions/SaveConfigurationV1Response.js'
import { UpdateConfigurationV1Request } from '../../generated-definitions/UpdateConfigurationV1Request.js'
import { UpdateConfigurationV1Response } from '../../generated-definitions/UpdateConfigurationV1Response.js'

export enum Key_ConfigurationAdmin {
  Secrets_ByApp = 'Csm.ConfigurationAdmin.Secrets_ByApp',
  Secret_ByApp = 'Csm.ConfigurationAdmin.Secret_ByApp',
  Variables_ByApp = 'Csm.ConfigurationAdmin.Variables_ByApp',
  Variable_ByApp = 'Csm.ConfigurationAdmin.Variable_ByApp',
  Secret_ByApp_ByConfigId = 'Csm.ConfigurationAdmin.Secret_ByApp_ByConfigId',
  Variable_ByApp_ByConfigId = 'Csm.ConfigurationAdmin.Variable_ByApp_ByConfigId'
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [READ]&lt;/code&gt; Get list of environment secrets per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Secrets_ByApp, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetSecrets_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetListOfConfigurationsV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetListOfConfigurationsV1Response>) => void
): UseQueryResult<GetListOfConfigurationsV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetSecrets_ByApp>[1]) => async () => {
    const response = await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getSecrets_ByApp(
      input.app,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetListOfConfigurationsV1Response, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Secrets_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [CREATE]&lt;/code&gt; Save an environment secret. Request body: - configName : environment secret name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Secret_ByApp, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_CreateSecret_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SaveConfigurationV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: SaveConfigurationV1Response) => void
): UseMutationResult<
  SaveConfigurationV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }) => {
    const response = await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createSecret_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Secret_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [READ]&lt;/code&gt; Get list of environment variables per app Available Deployment Status: &lt;code&gt;deployed&lt;/code&gt; = app config is already deployed &lt;code&gt;undeployed&lt;/code&gt; = app config is not deployed yet and need restart and deploy of the app to be deployed
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Variables_ByApp, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetVariables_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string; queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetListOfConfigurationsV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetListOfConfigurationsV1Response>) => void
): UseQueryResult<GetListOfConfigurationsV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useConfigurationAdminApi_GetVariables_ByApp>[1]) => async () => {
    const response = await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getVariables_ByApp(
      input.app,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetListOfConfigurationsV1Response, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Variables_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [CREATE]&lt;/code&gt; Save an environment variable. Request body: - configName : environment variable name - Required. - source : source of the configuration value (plaintext or ssm) - Required. - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Variable_ByApp, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_CreateVariable_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      SaveConfigurationV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: SaveConfigurationV1Response) => void
): UseMutationResult<
  SaveConfigurationV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: SaveConfigurationV1Request }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createVariable_ByApp(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Variable_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [DELETE]&lt;/code&gt; Delete an environment secret.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Secret_ByApp_ByConfigId, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteSecret_ByApp_ByConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteSecret_ByApp_ByConfigId(input.app, input.configId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Secret_ByApp_ByConfigId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:SECRET [UPDATE]&lt;/code&gt; Update an environment secret. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Secret_ByApp_ByConfigId, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateSecret_ByApp_ByConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateConfigurationV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateConfigurationV1Response) => void
): UseMutationResult<
  UpdateConfigurationV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateSecret_ByApp_ByConfigId(input.app, input.configId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Secret_ByApp_ByConfigId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [DELETE]&lt;/code&gt; Delete an environment variable.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Variable_ByApp_ByConfigId, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_DeleteVariable_ByApp_ByConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; configId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteVariable_ByApp_ByConfigId(input.app, input.configId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Variable_ByApp_ByConfigId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:VARIABLE [UPDATE]&lt;/code&gt; Update an environment variable. Request body: - value : configuration value - Required. - description : description of the configuration - Optional. - applyMask : mask the value in the Helm manifest for sensitive information (true or false) - Optional.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Variable_ByApp_ByConfigId, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_UpdateVariable_ByApp_ByConfigIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateConfigurationV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateConfigurationV1Response) => void
): UseMutationResult<
  UpdateConfigurationV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; configId: string; data: UpdateConfigurationV1Request }) => {
    const response = await ConfigurationAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateVariable_ByApp_ByConfigId(input.app, input.configId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Variable_ByApp_ByConfigId],
    mutationFn,
    ...options
  })
}
