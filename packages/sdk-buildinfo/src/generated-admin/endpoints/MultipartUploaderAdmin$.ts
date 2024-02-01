/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../../generated-definitions/StartMultipartUploadRequest.js'

export class MultipartUploaderAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * This API is used to &lt;b&gt;start multipart file upload&lt;/b&gt;. The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;Make sure to upload the Parts in-order based on the presigned urls order.The size of each Part should above or equals to 5MB, except the last one.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: multipart upload summary&lt;/li&gt;&lt;/ul&gt;
   */
  createBlockMultipart(data: StartMultipartUploadRequest): Promise<IResponse<MultipartUploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MultipartUploadSummary, 'MultipartUploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;start resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;If there&#39;s a missing Part in the presigned urls list, it indicates that the Part already uploaded previously, so it can be skipped.&lt;br/&gt;The size of each Part should above or equals to 5MB, except the last Part.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: multipart upload summary&lt;/li&gt;&lt;/ul&gt;
   */
  createBlockMultipart_ByNS(data: StartMultipartUploadRequest): Promise<IResponse<MultipartUploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MultipartUploadSummary, 'MultipartUploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;abort multipart file upload&lt;/b&gt;. The aborted multipart file upload cannot be continued again.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteBlockMultipart_ByHash(hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;commit multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;The request should contains list of PartNumber along with its ETag value. The list should be in-order.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: block manifest&lt;/li&gt;&lt;/ul&gt;
   */
  patchBlockMultipart_ByHash(hash: string, data: CommitMultipartUploadRequest): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;abort resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The aborted multipart file upload cannot be continued again.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=8 (DELETE)&lt;/li&gt;&lt;/ul&gt;
   */
  deleteBlockMultipart_ByHash_ByNS(hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;commit resumable multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;If there&#39;s a missing Part that not uploaded yet, then the multipart file upload cannot be committed.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: block manifest&lt;/li&gt;&lt;/ul&gt;
   */
  patchBlockMultipart_ByHash_ByNS(hash: string): Promise<IResponse<BlockManifest>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BlockManifest, 'BlockManifest')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * This API is used to &lt;b&gt;commit the Part of multipart upload&lt;/b&gt;.&lt;br/&gt;The committed Part will be marked as completed, so in case the multipart file upload retries, it won&#39;t be included in the list of unuploaded parts.&lt;br/&gt;&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission (IAM Auth)&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: None&lt;/li&gt;&lt;/ul&gt;
   */
  createPartBlock_ByHash(hash: string, data: MultipartUploadedPart): Promise<IResponse<MultipartUploadSummary>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/v2/admin/namespaces/{namespace}/blocks/multipart/{hash}/part'
      .replace('{namespace}', this.namespace)
      .replace('{hash}', hash)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, MultipartUploadSummary, 'MultipartUploadSummary')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
