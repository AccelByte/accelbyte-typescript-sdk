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
import { DeploymentV2AdminApi } from '../DeploymentV2AdminApi.js'

import { CreateDeploymentV2Request } from '../../generated-definitions/CreateDeploymentV2Request.js'
import { CreateDeploymentV2Response } from '../../generated-definitions/CreateDeploymentV2Response.js'
import { GetDeploymentListV2DataItem } from '../../generated-definitions/GetDeploymentListV2DataItem.js'
import { GetDeploymentListV2Request } from '../../generated-definitions/GetDeploymentListV2Request.js'
import { GetDeploymentListV2Response } from '../../generated-definitions/GetDeploymentListV2Response.js'

export enum Key_DeploymentV2Admin {
  Deployment_v2 = 'Csm.DeploymentV2Admin.Deployment_v2',
  Deployment_ByApp_v2 = 'Csm.DeploymentV2Admin.Deployment_ByApp_v2',
  Deployment_ByDeploymentId_v2 = 'Csm.DeploymentV2Admin.Deployment_ByDeploymentId_v2'
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Request : - appIds : list of app ids - deploymentIds: list of deployment ids - statuses: deployment-in-progress deployment-failed deployment-timeout deployment-running deployment-down Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentV2Admin.Deployment_v2, input]
 * }
 * ```
 */
export const useDeploymentV2AdminApi_CreateDeploymentMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetDeploymentListV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: GetDeploymentListV2Request; queryParams?: { limit?: number; offset?: number } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetDeploymentListV2Response) => void
): UseMutationResult<
  GetDeploymentListV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: GetDeploymentListV2Request; queryParams?: { limit?: number; offset?: number } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: GetDeploymentListV2Request; queryParams?: { limit?: number; offset?: number } }
  ) => {
    const response = await DeploymentV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDeployment_v2(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentV2Admin.Deployment_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This Endpoint will create new deployment and apply all of the secrets and variable as environment variable Required: - Valid Access Token - Valid Image Version Created on Uploading image with docker or other method - Valid App name - Valid Namespace name
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentV2Admin.Deployment_ByApp_v2, input]
 * }
 * ```
 */
export const useDeploymentV2AdminApi_CreateDeployment_ByAppMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateDeploymentV2Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: CreateDeploymentV2Request }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateDeploymentV2Response) => void
): UseMutationResult<
  CreateDeploymentV2Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: CreateDeploymentV2Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: CreateDeploymentV2Request }) => {
    const response = await DeploymentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDeployment_ByApp_v2(input.app, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentV2Admin.Deployment_ByApp_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint will delete release object for the service deployment in the cluster Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentV2Admin.Deployment_ByDeploymentId_v2, input]
 * }
 * ```
 */
export const useDeploymentV2AdminApi_DeleteDeployment_ByDeploymentIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deploymentId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deploymentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deploymentId: string }) => {
    const response = await DeploymentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteDeployment_ByDeploymentId_v2(input.deploymentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentV2Admin.Deployment_ByDeploymentId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information. Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentV2Admin.Deployment_ByDeploymentId_v2, input]
 * }
 * ```
 */
export const useDeploymentV2AdminApi_GetDeployment_ByDeploymentId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deploymentId: string },
  options?: Omit<UseQueryOptions<GetDeploymentListV2DataItem, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetDeploymentListV2DataItem>) => void
): UseQueryResult<GetDeploymentListV2DataItem, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentV2AdminApi_GetDeployment_ByDeploymentId_v2>[1]) => async () => {
    const response = await DeploymentV2AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDeployment_ByDeploymentId_v2(input.deploymentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetDeploymentListV2DataItem, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentV2Admin.Deployment_ByDeploymentId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
