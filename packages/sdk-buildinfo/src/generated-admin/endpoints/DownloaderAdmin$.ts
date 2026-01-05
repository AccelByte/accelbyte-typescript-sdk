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
import { BlockDownloadUrls } from '../../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../../generated-definitions/BlockDownloadUrlsRequest.js'

export class DownloaderAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations.
   */
  createBlockUrl_ByBuildId(buildId: string, data: BlockDownloadUrlsRequest): Promise<Response<BlockDownloadUrls>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/builds/{buildId}/blocks/urls'
      .replace('{namespace}', this.namespace)
      .replace('{buildId}', buildId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockDownloadUrls, 'BlockDownloadUrls')
  }
}
