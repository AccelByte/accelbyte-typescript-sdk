/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AppItem } from '../../generated-definitions/AppItem.js'
import { CreateAppV2Request } from '../../generated-definitions/CreateAppV2Request.js'
import { GetAppListV2Request } from '../../generated-definitions/GetAppListV2Request.js'
import { GetAppListV2Response } from '../../generated-definitions/GetAppListV2Response.js'
import { IncreaseLimitFormRequest } from '../../generated-definitions/IncreaseLimitFormRequest.js'
import { UpdateAppResourceRequest } from '../../generated-definitions/UpdateAppResourceRequest.js'
import { UpdateAppV2Request } from '../../generated-definitions/UpdateAppV2Request.js'

export class AppV2Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get list of extend apps on a given game namespace
   */
  createApp_v2(data: GetAppListV2Request, queryParams?: { limit?: number; offset?: number }): Promise<Response<GetAppListV2Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetAppListV2Response, 'GetAppListV2Response')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete extend app by given {app} name This endpoint will delete app information, configuration, deployments and all related manifest from db, storage and cluster
   */
  deleteApp_ByApp_v2(app: string, queryParams?: { forced?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Get extend app by name Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
   */
  getApp_ByApp_v2(app: string): Promise<Response<AppItem>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppItem, 'AppItem')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app info provided on request body
   */
  patchApp_ByApp_v2(app: string, data: UpdateAppV2Request): Promise<Response<AppItem>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppItem, 'AppItem')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Create new extend app with name provided by {app} path parameter and specified scenario type Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt; - scenario 2: &lt;code&gt;service-extension&lt;/code&gt; - scenario 3: &lt;code&gt;event-handler&lt;/code&gt; Available app status: - &lt;code&gt;app-creating&lt;/code&gt; - &lt;code&gt;app-creation-failed&lt;/code&gt; - &lt;code&gt;app-creation-timeout&lt;/code&gt; - &lt;code&gt;app-undeployed&lt;/code&gt; - &lt;code&gt;deployment-in-progress&lt;/code&gt; - &lt;code&gt;deployment-failed&lt;/code&gt; - &lt;code&gt;deployment-timeout&lt;/code&gt; - &lt;code&gt;deployment-running&lt;/code&gt; - &lt;code&gt;deployment-down&lt;/code&gt; - &lt;code&gt;app-stopping&lt;/code&gt; - &lt;code&gt;app-stop-failed&lt;/code&gt; - &lt;code&gt;app-stop-timeout&lt;/code&gt; - &lt;code&gt;app-stopped&lt;/code&gt; - &lt;code&gt;app-removing&lt;/code&gt; - &lt;code&gt;app-removed&lt;/code&gt; - &lt;code&gt;app-remove-timeout&lt;/code&gt;
   */
  createApp_ByApp_v2(app: string, data: CreateAppV2Request): Promise<Response<AppItem>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppItem, 'AppItem')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
   */
  updateStop_ByApp_v2(app: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/stop'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
   */
  updateStart_ByApp_v2(app: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/start'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
   */
  patchResource_ByApp_v2(app: string, data: UpdateAppResourceRequest): Promise<Response<AppItem>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/resources'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppItem, 'AppItem')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update app resources provided on request body
   */
  createResourceForm_ByApp_v2(app: string, data: IncreaseLimitFormRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/resources/form'
      .replace('{namespace}', this.namespace)
      .replace('{app}', app)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
