/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateDeploymentV1Request } from '../generated-definitions/CreateDeploymentV1Request.js'
import { CreateDeploymentV1Response } from '../generated-definitions/CreateDeploymentV1Response.js'
import { GetDeploymentListV1Request } from '../generated-definitions/GetDeploymentListV1Request.js'
import { GetDeploymentListV1Response } from '../generated-definitions/GetDeploymentListV1Response.js'
import { GetDeploymentV1Response } from '../generated-definitions/GetDeploymentV1Response.js'
import { DeploymentAdmin$ } from './endpoints/DeploymentAdmin$.js'

export function DeploymentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function createDeployment(
    data: GetDeploymentListV1Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetDeploymentListV1Response>> {
    const $ = new DeploymentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeployment(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDeployment_ByApp(app: string, data: CreateDeploymentV1Request): Promise<AxiosResponse<CreateDeploymentV1Response>> {
    const $ = new DeploymentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeployment_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDeployment_ByDeploymentId(deploymentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new DeploymentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDeployment_ByDeploymentId(deploymentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeployment_ByDeploymentId(deploymentId: string): Promise<AxiosResponse<GetDeploymentV1Response>> {
    const $ = new DeploymentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeployment_ByDeploymentId(deploymentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Required: Valid Access Token
     */
    createDeployment,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This endpoint intended to apply the helm release or deploying the custom service image. Logic in this endpoint: - Getting the repo from AppHistory table and image tag from request - Getting the Helm Manifest template from S3 - Filling the Helm Manifest values - Installing the Helm Manifest to deploy the custom service image into K8s based on given namespace - Storing the filled Helm Manifest to S3 - Storing the Deployment information to Database Required: Valid Access Token
     */
    createDeployment_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint intended to delete helm release object and update the deleted_at in DB by given Deployment ID. Required: Valid Access Token
     */
    deleteDeployment_ByDeploymentId,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information by given Deployment ID from Deployment Table. Required: Valid Access Token
     */
    getDeployment_ByDeploymentId
  }
}
