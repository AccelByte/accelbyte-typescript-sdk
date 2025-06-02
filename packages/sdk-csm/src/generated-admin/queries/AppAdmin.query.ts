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
import { AppAdminApi } from '../AppAdminApi.js'

import { CreateAppV1Request } from '../../generated-definitions/CreateAppV1Request.js'
import { CreateAppV1Response } from '../../generated-definitions/CreateAppV1Response.js'
import { GetAppListV1Request } from '../../generated-definitions/GetAppListV1Request.js'
import { GetAppListV1Response } from '../../generated-definitions/GetAppListV1Response.js'
import { GetAppReleaseV1Response } from '../../generated-definitions/GetAppReleaseV1Response.js'
import { GetAppV1Response } from '../../generated-definitions/GetAppV1Response.js'
import { StartAppV1Request } from '../../generated-definitions/StartAppV1Request.js'
import { StartAppV1Response } from '../../generated-definitions/StartAppV1Response.js'
import { StopAppV1Request } from '../../generated-definitions/StopAppV1Request.js'
import { StopAppV1Response } from '../../generated-definitions/StopAppV1Response.js'
import { UpdateAppV1Request } from '../../generated-definitions/UpdateAppV1Request.js'
import { UpdateAppV1Response } from '../../generated-definitions/UpdateAppV1Response.js'

export enum Key_AppAdmin {
  App = 'Csm.AppAdmin.App',
  App_ByApp = 'Csm.AppAdmin.App_ByApp',
  Stop_ByApp = 'Csm.AppAdmin.Stop_ByApp',
  Start_ByApp = 'Csm.AppAdmin.Start_ByApp',
  Release_ByApp = 'Csm.AppAdmin.Release_ByApp'
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the List of Apps for AB-Extend Customer Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt;- scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.App, input]
 * }
 * ```
 */
export const useAppAdminApi_CreateAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetAppListV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: GetAppListV1Request; queryParams?: { limit?: number; offset?: number } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetAppListV1Response) => void
): UseMutationResult<
  GetAppListV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: GetAppListV1Request; queryParams?: { limit?: number; offset?: number } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: GetAppListV1Request; queryParams?: { limit?: number; offset?: number } }
  ) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createApp(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.App],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete App by given DeploymentID This endpoint intended to delete ECR repo, ECR manifests, service images, uninstall helm-release, and update the deleted_at in DB by given App Name. Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.App_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_DeleteApp_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; queryParams?: { forced?: string | null } }) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteApp_ByApp(
      input.app,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.App_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the App By Name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.App_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_GetApp_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string },
  options?: Omit<UseQueryOptions<GetAppV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAppV1Response>) => void
): UseQueryResult<GetAppV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAppAdminApi_GetApp_ByApp>[1]) => async () => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getApp_ByApp(input.app)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAppV1Response, AxiosError<ApiError>>({
    queryKey: [Key_AppAdmin.App_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update App Partially
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.App_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_PatchApp_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UpdateAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppV1Request }>,
    'mutationKey'
  >,
  callback?: (data: UpdateAppV1Response) => void
): UseMutationResult<UpdateAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: UpdateAppV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: UpdateAppV1Request }) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchApp_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.App_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Creates new App for AB-Extend Customers Available scenario: - scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;- scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt; Default: &lt;code&gt;function-override&lt;/code&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.App_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_UpdateApp_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CreateAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: CreateAppV1Request }>,
    'mutationKey'
  >,
  callback?: (data: CreateAppV1Response) => void
): UseMutationResult<CreateAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: CreateAppV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: CreateAppV1Request }) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateApp_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.App_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.Stop_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_UpdateStop_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StopAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: StopAppV1Request }>,
    'mutationKey'
  >,
  callback?: (data: StopAppV1Response) => void
): UseMutationResult<StopAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: StopAppV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: StopAppV1Request }) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStop_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.Stop_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.Start_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_UpdateStart_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StartAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: StartAppV1Request }>,
    'mutationKey'
  >,
  callback?: (data: StartAppV1Response) => void
): UseMutationResult<StartAppV1Response, AxiosError<ApiError>, SdkSetConfigParam & { app: string; data: StartAppV1Request }> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: StartAppV1Request }) => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStart_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AppAdmin.Start_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the Latest Release Version info of this App
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AppAdmin.Release_ByApp, input]
 * }
 * ```
 */
export const useAppAdminApi_GetRelease_ByApp = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { app: string },
  options?: Omit<UseQueryOptions<GetAppReleaseV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetAppReleaseV1Response>) => void
): UseQueryResult<GetAppReleaseV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAppAdminApi_GetRelease_ByApp>[1]) => async () => {
    const response = await AppAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRelease_ByApp(input.app)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetAppReleaseV1Response, AxiosError<ApiError>>({
    queryKey: [Key_AppAdmin.Release_ByApp, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
