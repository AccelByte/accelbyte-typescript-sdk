/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { DeletionData } from '../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../generated-definitions/RequestDeleteResponse.js'
import { DataDeletionAdmin$ } from './endpoints/DataDeletionAdmin$.js'

export function DataDeletionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getDeletions(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
    offset?: number
    requestDate?: string | null
  }): Promise<AxiosResponse<ListDeletionDataResponse>> {
    const $ = new DataDeletionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeletions(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDeletion_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new DataDeletionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeletions_ByUserId(userId: string): Promise<AxiosResponse<DeletionData>> {
    const $ = new DataDeletionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeletions_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDeletion_ByUserId(userId: string): Promise<AxiosResponse<RequestDeleteResponse>> {
    const $ = new DataDeletionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve all user&#39;s account deletion requests in specified date Scope: account
     */
    getDeletions,
    /**
     * Cancel user&#39;s account deletion request Scope: account
     */
    deleteDeletion_ByUserId,
    /**
     * Retrieve specific user&#39;s account deletion request Scope: account
     */
    getDeletions_ByUserId,
    /**
     * Submit user&#39;s account deletion request. Scope: account
     */
    createDeletion_ByUserId
  }
}
