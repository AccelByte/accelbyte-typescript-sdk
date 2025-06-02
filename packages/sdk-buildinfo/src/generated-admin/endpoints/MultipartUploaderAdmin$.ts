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
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../../generated-definitions/StartMultipartUploadRequest.js'

export class MultipartUploaderAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to &lt;b&gt;start multipart file upload&lt;/b&gt;. The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;Make sure to upload the Parts in-order based on the presigned urls order.The size of each Part should above or equals to 5MB, except the last one.
   */
  createBlockMultipart(data: StartMultipartUploadRequest): Promise<Response<MultipartUploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MultipartUploadSummary,
      'MultipartUploadSummary'
    )
  }
  /**
   * This API is used to &lt;b&gt;start resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;If there&#39;s a missing Part in the presigned urls list, it indicates that the Part already uploaded previously, so it can be skipped.&lt;br/&gt;The size of each Part should above or equals to 5MB, except the last Part.
   */
  createBlockMultipart_v2(data: StartMultipartUploadRequest): Promise<Response<MultipartUploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MultipartUploadSummary,
      'MultipartUploadSummary'
    )
  }
  /**
   * This API is used to &lt;b&gt;abort multipart file upload&lt;/b&gt;. The aborted multipart file upload cannot be continued again.
   */
  deleteBlockMultipart_ByHash(hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to &lt;b&gt;commit multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;The request should contains list of PartNumber along with its ETag value. The list should be in-order.
   */
  patchBlockMultipart_ByHash(hash: string, data: CommitMultipartUploadRequest): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to &lt;b&gt;abort resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The aborted multipart file upload cannot be continued again.
   */
  deleteBlockMultipart_ByHash_v2(hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to &lt;b&gt;commit resumable multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;If there&#39;s a missing Part that not uploaded yet, then the multipart file upload cannot be committed.
   */
  patchBlockMultipart_ByHash_v2(hash: string): Promise<Response<BlockManifest>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BlockManifest, 'BlockManifest')
  }
  /**
   * This API is used to &lt;b&gt;commit the Part of multipart upload&lt;/b&gt;.&lt;br/&gt;The committed Part will be marked as completed, so in case the multipart file upload retries, it won&#39;t be included in the list of unuploaded parts.
   */
  createPartBlock_ByHash_v2(hash: string, data: MultipartUploadedPart): Promise<Response<MultipartUploadSummary>> {
    const params = {} as AxiosRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}/part'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      MultipartUploadSummary,
      'MultipartUploadSummary'
    )
  }
}
