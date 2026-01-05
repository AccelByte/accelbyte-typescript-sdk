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
import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'

export class PoliciesWithNamespaceAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Delete policy.Can only be deleted if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy is not default policy&lt;/li&gt;&lt;li&gt;Policy version under policy has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
   */
  deletePolicy_ByPolicyId(policyId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/{policyId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update country-specific and country-group policy.
   */
  patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/{policyId}'
      .replace('{namespace}', this.namespace)
      .replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update a policy to be the default.
   */
  patchDefault_ByPolicyId(policyId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/agreement/admin/namespaces/{namespace}/policies/{policyId}/default'
      .replace('{namespace}', this.namespace)
      .replace('{policyId}', policyId)
    const resultPromise = this.axiosInstance.patch(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
