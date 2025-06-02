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
import { AppV2AdminApi } from '../AppV2AdminApi.js'

import { AppItem } from '../../generated-definitions/AppItem.js'
import { CreateAppV2Request } from '../../generated-definitions/CreateAppV2Request.js'
import { GetAppListV2Request } from '../../generated-definitions/GetAppListV2Request.js'
import { GetAppListV2Response } from '../../generated-definitions/GetAppListV2Response.js'
import { IncreaseLimitFormRequest } from '../../generated-definitions/IncreaseLimitFormRequest.js'
import { UpdateAppResourceRequest } from '../../generated-definitions/UpdateAppResourceRequest.js'
import { UpdateAppV2Request } from '../../generated-definitions/UpdateAppV2Request.js'

export enum Key_AppV2Admin {
  App_v2 = 'Csm.AppV2Admin.App_v2',
  App_ByApp_v2 = 'Csm.AppV2Admin.App_ByApp_v2',
  Stop_ByApp_v2 = 'Csm.AppV2Admin.Stop_ByApp_v2',
  Start_ByApp_v2 = 'Csm.AppV2Admin.Start_ByApp_v2',
  Resource_ByApp_v2 = 'Csm.AppV2Admin.Resource_ByApp_v2',
  ResourceForm_ByApp_v2 = 'Csm.AppV2Admin.ResourceForm_ByApp_v2'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get list of extend apps on a given game namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.App_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_CreateAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetAppListV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: GetAppListV2Request; queryParams?: { limit?: number; offset?: number } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetAppListV2Response) => void
): UseMutationResult<
  GetAppListV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: GetAppListV2Request; queryParams?: { limit?: number; offset?: number } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: GetAppListV2Request; queryParams?: { limit?: number; offset?: number } }
  ) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createApp_v2(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.App_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete extend app by given {app} name This endpoint will delete app information, configuration, deployments and all related manifest from db, storage and cluster
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.App_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_DeleteApp_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteApp_ByApp_v2(
      input.app,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.App_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get extend app by name Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.App_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_GetApp_ByApp_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string },
  options?: Omit<UseQueryOptions<AppItem, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<AppItem>) => void
): UseQueryResult<AppItem, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAppV2AdminApi_GetApp_ByApp_v2>[1]) => async () => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getApp_ByApp_v2(input.app)
    callback && callback(response)
    return response.data
  }

  return useQuery<AppItem, AxiosError<ApiError>>({
    queryKey: [Key_AppV2Admin.App_ByApp_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app info provided on request body
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.App_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_PatchApp_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppV2Request }>,
    'mutationKey'
  >,
  callback?: (data: AppItem) => void
): UseMutationResult<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppV2Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: UpdateAppV2Request }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchApp_ByApp_v2(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.App_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Create new extend app with name provided by {app} path parameter and specified scenario type Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.App_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_CreateApp_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: CreateAppV2Request }>,
    'mutationKey'
  >,
  callback?: (data: AppItem) => void
): UseMutationResult<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: CreateAppV2Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: CreateAppV2Request }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createApp_ByApp_v2(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.App_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.Stop_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_UpdateStop_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStop_ByApp_v2(
      input.app
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.Stop_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.Start_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_UpdateStart_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStart_ByApp_v2(
      input.app
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.Start_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.Resource_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_PatchResource_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppResourceRequest }>,
    'mutationKey'
  >,
  callback?: (data: AppItem) => void
): UseMutationResult<AppItem, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppResourceRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: UpdateAppResourceRequest }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchResource_ByApp_v2(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.Resource_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppV2Admin.ResourceForm_ByApp_v2, input]
 * }
 * ```
 */
export const useAppV2AdminApi_CreateResourceForm_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: IncreaseLimitFormRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: IncreaseLimitFormRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: IncreaseLimitFormRequest }) => {
    const response = await AppV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createResourceForm_ByApp_v2(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppV2Admin.ResourceForm_ByApp_v2],
    mutationFn,
    ...options
  })
}
