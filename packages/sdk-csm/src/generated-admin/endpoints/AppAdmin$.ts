/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
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

export class AppAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the List of Apps for AB-Extend Customer Available scenario: - scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt;- scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;
   */
  createApp(data: GetAppListV1Request, queryParams?: { limit?: number; offset?: number }): Promise<Response<GetAppListV1Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetAppListV1Response, 'GetAppListV1Response')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [DELETE]&lt;/code&gt; Delete App by given DeploymentID This endpoint intended to delete ECR repo, ECR manifests, service images, uninstall helm-release, and update the deleted_at in DB by given App Name. Required: Valid Access Token
   */
  deleteApp_ByApp(app: string, queryParams?: { forced?: string | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the App By Name
   */
  getApp_ByApp(app: string): Promise<Response<GetAppV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetAppV1Response, 'GetAppV1Response')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Update App Partially
   */
  patchApp_ByApp(app: string, data: UpdateAppV1Request): Promise<Response<UpdateAppV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, UpdateAppV1Response, 'UpdateAppV1Response')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [CREATE]&lt;/code&gt; Creates new App for AB-Extend Customers Available scenario: - scenario 2: &lt;code&gt;service-extension&lt;/code&gt;&lt;br&gt;- scenario 3: &lt;code&gt;event-handler&lt;/code&gt;&lt;br&gt;- scenario 1: &lt;code&gt;function-override&lt;/code&gt;&lt;br&gt; Default: &lt;code&gt;function-override&lt;/code&gt;
   */
  updateApp_ByApp(app: string, data: CreateAppV1Request): Promise<Response<CreateAppV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, CreateAppV1Response, 'CreateAppV1Response')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Stops the Application
   */
  updateStop_ByApp(app: string, data: StopAppV1Request): Promise<Response<StopAppV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/stop'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StopAppV1Response, 'StopAppV1Response')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [UPDATE]&lt;/code&gt; Starts the Application
   */
  updateStart_ByApp(app: string, data: StartAppV1Request): Promise<Response<StartAppV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/start'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, StartAppV1Response, 'StartAppV1Response')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:APP [READ]&lt;/code&gt; Gets the Latest Release Version info of this App
   */
  getRelease_ByApp(app: string): Promise<Response<GetAppReleaseV1Response>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/release'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAppReleaseV1Response,
      'GetAppReleaseV1Response'
    )
  }
}
