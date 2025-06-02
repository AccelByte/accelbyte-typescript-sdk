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
import { CreateAppV1Request } from '../generated-definitions/CreateAppV1Request.js'
import { CreateAppV1Response } from '../generated-definitions/CreateAppV1Response.js'
import { GetAppListV1Request } from '../generated-definitions/GetAppListV1Request.js'
import { GetAppListV1Response } from '../generated-definitions/GetAppListV1Response.js'
import { GetAppReleaseV1Response } from '../generated-definitions/GetAppReleaseV1Response.js'
import { GetAppV1Response } from '../generated-definitions/GetAppV1Response.js'
import { StartAppV1Request } from '../generated-definitions/StartAppV1Request.js'
import { StartAppV1Response } from '../generated-definitions/StartAppV1Response.js'
import { StopAppV1Request } from '../generated-definitions/StopAppV1Request.js'
import { StopAppV1Response } from '../generated-definitions/StopAppV1Response.js'
import { UpdateAppV1Request } from '../generated-definitions/UpdateAppV1Request.js'
import { UpdateAppV1Response } from '../generated-definitions/UpdateAppV1Response.js'
import { AppAdmin$ } from './endpoints/AppAdmin$.js'

export function AppAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function createApp(
    data: GetAppListV1Request,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetAppListV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createApp(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteApp_ByApp(app: string, queryParams?: { forced?: string | null }): Promise<AxiosResponse<unknown>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteApp_ByApp(app, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getApp_ByApp(app: string): Promise<AxiosResponse<GetAppV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getApp_ByApp(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchApp_ByApp(app: string, data: UpdateAppV1Request): Promise<AxiosResponse<UpdateAppV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchApp_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateApp_ByApp(app: string, data: CreateAppV1Request): Promise<AxiosResponse<CreateAppV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateApp_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStop_ByApp(app: string, data: StopAppV1Request): Promise<AxiosResponse<StopAppV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStop_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateStart_ByApp(app: string, data: StartAppV1Request): Promise<AxiosResponse<StartAppV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStart_ByApp(app, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRelease_ByApp(app: string): Promise<AxiosResponse<GetAppReleaseV1Response>> {
    const $ = new AppAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRelease_ByApp(app)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the List of Apps for AB-Extend Customer Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt;- scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;
     */
    createApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete App by given DeploymentID This endpoint intended to delete ECR repo, ECR manifests, service images, uninstall helm-release, and update the deleted_at in DB by given App Name. Required: Valid Access Token
     */
    deleteApp_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the App By Name
     */
    getApp_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update App Partially
     */
    patchApp_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Creates new App for AB-Extend Customers Available scenario: - scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;- scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt; Default: &lt;code&gt;function-override&lt;/code&gt;
     */
    updateApp_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
     */
    updateStop_ByApp,
    /**
     * @deprecated
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
     */
    updateStart_ByApp,
    /**
     * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the Latest Release Version info of this App
     */
    getRelease_ByApp
  }
}
