/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { CreateLocalizedPolicyVersionRequest } from '../../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../../generated-definitions/UploadPolicyVersionAttachmentRequest.js'

export class LocalizedPolicyVersionsWithNamespaceAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Retrieve a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<IResponseWithSync<RetrieveLocalizedPolicyVersionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, RetrieveLocalizedPolicyVersionResponse, 'RetrieveLocalizedPolicyVersionResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UpdateLocalizedPolicyVersionRequest
  ): Promise<IResponse<UpdateLocalizedPolicyVersionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UpdateLocalizedPolicyVersionResponse, 'UpdateLocalizedPolicyVersionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Retrieve versions of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=2 (READ)&lt;/li&gt;&lt;/ul&gt;
   */
  getLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string
  ): Promise<IResponseWithSync<RetrieveLocalizedPolicyVersionResponseArray>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(
            () => resultPromise,
            RetrieveLocalizedPolicyVersionResponseArray,
            'RetrieveLocalizedPolicyVersionResponseArray'
          )
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create a version of a particular country-specific policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: CreateLocalizedPolicyVersionRequest
  ): Promise<IResponse<CreateLocalizedPolicyVersionResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, CreateLocalizedPolicyVersionResponse, 'CreateLocalizedPolicyVersionResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update a localized version policy to be the default.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=4 (UPDATE)&lt;/li&gt;&lt;/ul&gt;
   */
  patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/default'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Request presigned URL for upload attachment for a particular localized version of base policy.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:LEGAL&#34;, action=1 (CREATE)&lt;/li&gt;&lt;/ul&gt;
   */
  createAttachment_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UploadPolicyVersionAttachmentRequest
  ): Promise<IResponse<UploadLocalizedPolicyVersionAttachmentResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/attachments'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(
          () => resultPromise,
          UploadLocalizedPolicyVersionAttachmentResponse,
          'UploadLocalizedPolicyVersionAttachmentResponse'
        )
      : Validate.unsafeResponse(() => resultPromise)
  }
}
