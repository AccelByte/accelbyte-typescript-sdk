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
import { GetAppImageListV1Response } from '../../generated-definitions/GetAppImageListV1Response.js'

export class ImageAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [DELETE]&lt;/code&gt; Deletes the images uploaded to the repository
   */
  deleteImage_ByApp(app: string, data: DeleteAppImagesV1Request): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/images'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * @deprecated
   * Required permission : &lt;code&gt;ADMIN:NAMESPACE:{namespace}:EXTEND:IMAGE [READ]&lt;/code&gt; Get a list of container images Default &#39;cached&#39; parameter is &#39;true&#39;
   */
  getImages_ByApp(
    app: string,
    queryParams?: { cached?: string | null; limit?: number; offset?: number }
  ): Promise<Response<GetAppImageListV1Response>> {
    const params = { cached: 'true', ...queryParams } as AxiosRequestConfig
    const url = '/csm/v1/admin/namespaces/{namespace}/apps/{app}/images'.replace('{namespace}', this.namespace).replace('{app}', app)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetAppImageListV1Response,
      'GetAppImageListV1Response'
    )
  }
}
