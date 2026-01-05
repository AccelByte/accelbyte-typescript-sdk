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
import { CreatePolicyVersionRequest } from '../../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../../generated-definitions/CreatePolicyVersionResponse.js'
import { RetrievePolicyVersionResponseArray } from '../../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../../generated-definitions/UpdatePolicyVersionResponse.js'

export class PolicyVersionsWithNamespaceAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Retrieve a version of a particular country specific policy. If version is not provided, the Legal Service will assume caller requesting all versions from country-specific policy.
   */
  getVersions_ByPolicyId(
    policyId: string,
    queryParams?: { versionId?: string | null }
  ): Promise<Response<RetrievePolicyVersionResponseArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/{policyId}/versions'
      .replace('{namespace}', this.namespace)
      .replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      RetrievePolicyVersionResponseArray,
      'RetrievePolicyVersionResponseArray'
    )
  }
  /**
   * Create a version of a particular country-specific policy.
   */
  createVersion_ByPolicyId(policyId: string, data: CreatePolicyVersionRequest): Promise<Response<CreatePolicyVersionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/{policyId}/versions'
      .replace('{namespace}', this.namespace)
      .replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CreatePolicyVersionResponse,
      'CreatePolicyVersionResponse'
    )
  }
  /**
   * Delete a policy version from policy.Can only be deleted if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy version is not published&lt;/li&gt;&lt;li&gt;Policy version has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
   */
  deletePolicyVersion_ByPolicyVersionId(policyVersionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update a particular policy version.
   */
  patchPolicyVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: UpdatePolicyVersionRequest
  ): Promise<Response<UpdatePolicyVersionResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UpdatePolicyVersionResponse,
      'UpdatePolicyVersionResponse'
    )
  }
  /**
   * Manually publish a version of a particular country-specific policy.
   */
  patchLatestPolicy_ByPolicyVersionId(
    policyVersionId: string,
    queryParams?: { shouldNotify?: boolean | null }
  ): Promise<Response<unknown>> {
    const params = { shouldNotify: true, ...queryParams } as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}/latest'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Un-publish a policy version from policy.Can only be un-publish if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy version has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
   */
  patchUnpublishPolicy_ByPolicyVersionId(policyVersionId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/versions/{policyVersionId}/unpublish'
      .replace('{namespace}', this.namespace)
      .replace('{policyVersionId}', policyVersionId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
