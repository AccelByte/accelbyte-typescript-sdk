/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { CreateDeploymentV2Request } from '../generated-definitions/CreateDeploymentV2Request.js'
import { CreateDeploymentV2Response } from '../generated-definitions/CreateDeploymentV2Response.js'
import { GetDeploymentListV2DataItem } from '../generated-definitions/GetDeploymentListV2DataItem.js'
import { GetDeploymentListV2Request } from '../generated-definitions/GetDeploymentListV2Request.js'
import { GetDeploymentListV2Response } from '../generated-definitions/GetDeploymentListV2Response.js'
import { DeploymentV2Admin$ } from './endpoints/DeploymentV2Admin$.js'

export function DeploymentV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function createDeployment_v2(
    data: GetDeploymentListV2Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetDeploymentListV2Response>> {
    const $ = new DeploymentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeployment_v2(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDeployment_ByApp_v2(
    app: string,
    data: CreateDeploymentV2Request
  ): Promise<AxiosResponse<CreateDeploymentV2Response>> {
    const $ = new DeploymentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeployment_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDeployment_ByDeploymentId_v2(deploymentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new DeploymentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDeployment_ByDeploymentId_v2(deploymentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeployment_ByDeploymentId_v2(deploymentId: string): Promise<AxiosResponse<GetDeploymentListV2DataItem>> {
    const $ = new DeploymentV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeployment_ByDeploymentId_v2(deploymentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Filters the List of Deployments This endpoint intended to get list of Deployment done for the given publisher and game. Request : - appIds : list of app ids - deploymentIds: list of deployment ids - statuses: deployment-in-progress deployment-failed deployment-timeout deployment-running deployment-down Required: Valid Access Token
     */
    createDeployment_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [CREATE]&lt;/code&gt; Creates Deployment for extend service This Endpoint will create new deployment and apply all of the secrets and variable as environment variable Required: - Valid Access Token - Valid Image Version Created on Uploading image with docker or other method - Valid App name - Valid Namespace name
     */
    createDeployment_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [DELETE]&lt;/code&gt; Delete Deployment information by given DeploymentID This endpoint will delete release object for the service deployment in the cluster Required: Valid Access Token
     */
    deleteDeployment_ByDeploymentId_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:DEPLOYMENT [READ]&lt;/code&gt; Get Deployment information by given DeploymentID This endpoint intended to get Deployment information. Required: Valid Access Token
     */
    getDeployment_ByDeploymentId_v2
  }
}
