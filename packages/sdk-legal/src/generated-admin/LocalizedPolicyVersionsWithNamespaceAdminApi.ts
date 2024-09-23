/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { CreateLocalizedPolicyVersionRequest } from '../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../generated-definitions/UploadPolicyVersionAttachmentRequest.js'
import { LocalizedPolicyVersionsWithNamespaceAdmin$ } from './endpoints/LocalizedPolicyVersionsWithNamespaceAdmin$.js'

export function LocalizedPolicyVersionsWithNamespaceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<AxiosResponse<RetrieveLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UpdateLocalizedPolicyVersionRequest
  ): Promise<AxiosResponse<UpdateLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string
  ): Promise<AxiosResponse<RetrieveLocalizedPolicyVersionResponseArray>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createLocalizedPolicyVersionVersion_ByPolicyVersionId(
    policyVersionId: string,
    data: CreateLocalizedPolicyVersionRequest
  ): Promise<AxiosResponse<CreateLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createAttachment_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string,
    data: UploadPolicyVersionAttachmentRequest
  ): Promise<AxiosResponse<UploadLocalizedPolicyVersionAttachmentResponse>> {
    const $ = new LocalizedPolicyVersionsWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve a version of a particular country-specific policy.
     */
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    /**
     * Update a version of a particular country-specific policy.
     */
    updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    /**
     * Retrieve versions of a particular country-specific policy.
     */
    getLocalizedPolicyVersionVersion_ByPolicyVersionId,
    /**
     * Create a version of a particular country-specific policy.
     */
    createLocalizedPolicyVersionVersion_ByPolicyVersionId,
    /**
     * Update a localized version policy to be the default.
     */
    patchDefault_ByLocalizedPolicyVersionId,
    /**
     * Request presigned URL for upload attachment for a particular localized version of base policy.
     */
    createAttachment_ByLocalizedPolicyVersionId
  }
}
