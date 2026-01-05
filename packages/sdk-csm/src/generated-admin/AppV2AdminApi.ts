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
import { AppItem } from '../generated-definitions/AppItem.js'
import { CreateAppV2Request } from '../generated-definitions/CreateAppV2Request.js'
import { GetAppListV2Request } from '../generated-definitions/GetAppListV2Request.js'
import { GetAppListV2Response } from '../generated-definitions/GetAppListV2Response.js'
import { IncreaseLimitFormRequest } from '../generated-definitions/IncreaseLimitFormRequest.js'
import { UpdateAppResourceRequest } from '../generated-definitions/UpdateAppResourceRequest.js'
import { UpdateAppV2Request } from '../generated-definitions/UpdateAppV2Request.js'
import { AppV2Admin$ } from './endpoints/AppV2Admin$.js'

export function AppV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createApp_v2(
    data: GetAppListV2Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetAppListV2Response>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createApp_v2(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteApp_ByApp_v2(app: string, queryParams?: { forced?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteApp_ByApp_v2(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getApp_ByApp_v2(app: string): Promise<AxiosResponse<AppItem>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getApp_ByApp_v2(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchApp_ByApp_v2(app: string, data: UpdateAppV2Request): Promise<AxiosResponse<AppItem>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchApp_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createApp_ByApp_v2(app: string, data: CreateAppV2Request): Promise<AxiosResponse<AppItem>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createApp_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStop_ByApp_v2(app: string): Promise<AxiosResponse<unknown>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStop_ByApp_v2(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStart_ByApp_v2(app: string): Promise<AxiosResponse<unknown>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStart_ByApp_v2(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchResource_ByApp_v2(app: string, data: UpdateAppResourceRequest): Promise<AxiosResponse<AppItem>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchResource_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createResourceForm_ByApp_v2(app: string, data: IncreaseLimitFormRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AppV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createResourceForm_ByApp_v2(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get list of extend apps on a given game namespace
     */
    createApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete extend app by given {app} name This endpoint will delete app information, configuration, deployments and all related manifest from db, storage and cluster
     */
    deleteApp_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get extend app by name Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
     */
    getApp_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app info provided on request body
     */
    patchApp_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Create new extend app with name provided by {app} path parameter and specified scenario type Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
     */
    createApp_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
     */
    updateStop_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
     */
    updateStart_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
     */
    patchResource_ByApp_v2,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
     */
    createResourceForm_ByApp_v2
  }
}
