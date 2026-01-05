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
import { DeploymentAdminApi } from '../DeploymentAdminApi.js'

import { CreateDeploymentV1Request } from '../../generated-definitions/CreateDeploymentV1Request.js'
import { CreateDeploymentV1Response } from '../../generated-definitions/CreateDeploymentV1Response.js'
import { GetDeploymentListV1Request } from '../../generated-definitions/GetDeploymentListV1Request.js'
import { GetDeploymentListV1Response } from '../../generated-definitions/GetDeploymentListV1Response.js'
import { GetDeploymentV1Response } from '../../generated-definitions/GetDeploymentV1Response.js'

export enum Key_DeploymentAdmin {
  Deployment = 'Csm.DeploymentAdmin.Deployment',
  Deployment_ByApp = 'Csm.DeploymentAdmin.Deployment_ByApp',
  Deployment_ByDeploymentId = 'Csm.DeploymentAdmin.Deployment_ByDeploymentId'
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentAdmin.Deployment, input]
 * }
 * ```
 */
export const useDeploymentAdminApi_CreateDeploymentMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      GetDeploymentListV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: GetDeploymentListV1Request; queryParams?: { limit?: number; offset?: number } }
    >,
    'mutationKey'
  >,
  callback?: (data: GetDeploymentListV1Response) => void
): UseMutationResult<
  GetDeploymentListV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: GetDeploymentListV1Request; queryParams?: { limit?: number; offset?: number } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: GetDeploymentListV1Request; queryParams?: { limit?: number; offset?: number } }
  ) => {
    const response = await DeploymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDeployment(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentAdmin.Deployment],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This endpoint intended to apply the helm release or deploying the custom service image. Logic in this endpoint: - Getting the repo from AppHistory table and image tag from request - Getting the Helm Manifest template from S3 - Filling the Helm Manifest values - Installing the Helm Manifest to deploy the custom service image into K8s based on given namespace - Storing the filled Helm Manifest to S3 - Storing the Deployment information to Database Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentAdmin.Deployment_ByApp, input]
 * }
 * ```
 */
export const useDeploymentAdminApi_CreateDeployment_ByAppMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateDeploymentV1Response,
      AxiosError<ApiError>,
      SdkSetConfigParam & { app: string; data: CreateDeploymentV1Request }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateDeploymentV1Response) => void
): UseMutationResult<
  CreateDeploymentV1Response,
  AxiosError<ApiError>,
  SdkSetConfigParam & { app: string; data: CreateDeploymentV1Request }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { app: string; data: CreateDeploymentV1Request }) => {
    const response = await DeploymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDeployment_ByApp(
      input.app,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentAdmin.Deployment_ByApp],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint intended to delete helm release object and update the deleted_at in DB by given Deployment ID. Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentAdmin.Deployment_ByDeploymentId, input]
 * }
 * ```
 */
export const useDeploymentAdminApi_DeleteDeployment_ByDeploymentIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deploymentId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deploymentId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deploymentId: string }) => {
    const response = await DeploymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteDeployment_ByDeploymentId(input.deploymentId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DeploymentAdmin.Deployment_ByDeploymentId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information by given Deployment ID from Deployment Table. Required: Valid Access Token
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DeploymentAdmin.Deployment_ByDeploymentId, input]
 * }
 * ```
 */
export const useDeploymentAdminApi_GetDeployment_ByDeploymentId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deploymentId: string },
  options?: Omit<UseQueryOptions<GetDeploymentV1Response, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetDeploymentV1Response>) => void
): UseQueryResult<GetDeploymentV1Response, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDeploymentAdminApi_GetDeployment_ByDeploymentId>[1]) => async () => {
    const response = await DeploymentAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDeployment_ByDeploymentId(input.deploymentId)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetDeploymentV1Response, AxiosError<ApiError>>({
    queryKey: [Key_DeploymentAdmin.Deployment_ByDeploymentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
