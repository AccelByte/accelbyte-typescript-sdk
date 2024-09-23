/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
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
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve a version of a particular country-specific policy.
   */
  getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<Response<RetrieveLocalizedPolicyVersionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveLocalizedPolicyVersionResponse,
      'RetrieveLocalizedPolicyVersionResponse'
    )
  }
  /**
   * Update a version of a particular country-specific policy.
   */
  updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UpdateLocalizedPolicyVersionRequest
  ): Promise<Response<UpdateLocalizedPolicyVersionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdateLocalizedPolicyVersionResponse,
      'UpdateLocalizedPolicyVersionResponse'
    )
  }
  /**
   * Retrieve versions of a particular country-specific policy.
   */
  getLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string
  ): Promise<Response<RetrieveLocalizedPolicyVersionResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrieveLocalizedPolicyVersionResponseArray,
      'RetrieveLocalizedPolicyVersionResponseArray'
    )
  }
  /**
   * Create a version of a particular country-specific policy.
   */
  createLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: CreateLocalizedPolicyVersionRequest
  ): Promise<Response<CreateLocalizedPolicyVersionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreateLocalizedPolicyVersionResponse,
      'CreateLocalizedPolicyVersionResponse'
    )
  }
  /**
   * Update a localized version policy to be the default.
   */
  patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/default'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Request presigned URL for upload attachment for a particular localized version of base policy.
   */
  createAttachment_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UploadPolicyVersionAttachmentRequest
  ): Promise<Response<UploadLocalizedPolicyVersionAttachmentResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/localized-policy-versions/{localizedPolicyVersionId}/attachments'
      .replace('{namespace}', this.namespace)
      .replace('{localizedPolicyVersionId}', localizedPolicyVersionId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UploadLocalizedPolicyVersionAttachmentResponse,
      'UploadLocalizedPolicyVersionAttachmentResponse'
    )
  }
}
