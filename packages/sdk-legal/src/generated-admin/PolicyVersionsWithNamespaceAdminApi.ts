/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreatePolicyVersionRequest } from '../generated-definitions/CreatePolicyVersionRequest.js'
import { CreatePolicyVersionResponse } from '../generated-definitions/CreatePolicyVersionResponse.js'
import { RetrievePolicyVersionResponseArray } from '../generated-definitions/RetrievePolicyVersionResponseArray.js'
import { UpdatePolicyVersionRequest } from '../generated-definitions/UpdatePolicyVersionRequest.js'
import { UpdatePolicyVersionResponse } from '../generated-definitions/UpdatePolicyVersionResponse.js'
import { PolicyVersionsWithNamespaceAdmin$ } from './endpoints/PolicyVersionsWithNamespaceAdmin$.js'

export function PolicyVersionsWithNamespaceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getVersions_ByPolicyId(
    policyId: string,
    queryParams?: { versionId?: string | null }
  ): Promise<AxiosResponse<RetrievePolicyVersionResponseArray>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersions_ByPolicyId(policyId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createVersion_ByPolicyId(
    policyId: string,
    data: CreatePolicyVersionRequest
  ): Promise<AxiosResponse<CreatePolicyVersionResponse>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createVersion_ByPolicyId(policyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePolicyVersion_ByPolicyVersionId(policyVersionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePolicyVersion_ByPolicyVersionId(policyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchPolicyVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: UpdatePolicyVersionRequest
  ): Promise<AxiosResponse<UpdatePolicyVersionResponse>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchPolicyVersion_ByPolicyVersionId(policyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchLatestPolicy_ByPolicyVersionId(
    policyVersionId: string,
    queryParams?: { shouldNotify?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchLatestPolicy_ByPolicyVersionId(policyVersionId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchUnpublishPolicy_ByPolicyVersionId(policyVersionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUnpublishPolicy_ByPolicyVersionId(policyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve a version of a particular country specific policy. If version is not provided, the Legal Service will assume caller requesting all versions from country-specific policy.
     */
    getVersions_ByPolicyId,
    /**
     * Create a version of a particular country-specific policy.
     */
    createVersion_ByPolicyId,
    /**
     * Delete a policy version from policy.Can only be deleted if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy version is not published&lt;/li&gt;&lt;li&gt;Policy version has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
     */
    deletePolicyVersion_ByPolicyVersionId,
    /**
     * Update a particular policy version.
     */
    patchPolicyVersion_ByPolicyVersionId,
    /**
     * Manually publish a version of a particular country-specific policy.
     */
    patchLatestPolicy_ByPolicyVersionId,
    /**
     * Un-publish a policy version from policy.Can only be un-publish if match these criteria:&lt;br&gt;&lt;ul&gt;&lt;li&gt;Policy version has never been accepted by any user&lt;/li&gt;&lt;/ul&gt;
     */
    patchUnpublishPolicy_ByPolicyVersionId
  }
}
