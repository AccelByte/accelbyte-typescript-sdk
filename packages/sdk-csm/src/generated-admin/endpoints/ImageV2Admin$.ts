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
import { DeleteAppImagesV1Request } from '../../generated-definitions/DeleteAppImagesV1Request.js'
import { GetAppImageListV2Response } from '../../generated-definitions/GetAppImageListV2Response.js'

export class ImageV2Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [DELETE]&lt;/code&gt; Deletes list of provided image tags from the app image repository
   */
  deleteImage_ByApp_v2(app: string, data: DeleteAppImagesV1Request): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/images'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [READ]&lt;/code&gt; Get a list of container images Default &#39;cached&#39; parameter is &#39;true&#39;
   */
  getImages_ByApp_v2(app: string, queryParams?: { cached?: string | null }): Promise<Response<GetAppImageListV2Response>> {
    const params = { cached: 'true', ...queryParams } as AxiosRequestConfig
    const url = '/csm/v2/admin/namespaces/{namespace}/apps/{app}/images'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAppImageListV2Response,
      'GetAppImageListV2Response'
    )
  }
}
