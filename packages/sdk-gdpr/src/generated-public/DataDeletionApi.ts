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
import { DeletionStatus } from '../generated-definitions/DeletionStatus.js'
import { RequestDeleteResponse } from '../generated-definitions/RequestDeleteResponse.js'
import { DataDeletion$ } from './endpoints/DataDeletion$.js'

export function DataDeletionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function deleteUserMeDeletion(): Promise<AxiosResponse<unknown>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeDeletion()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postUserMeDeletion(data: {
    platformId: string | null
    platformToken: string | null
  }): Promise<AxiosResponse<RequestDeleteResponse>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeDeletion(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeDeletionsStatus(): Promise<AxiosResponse<DeletionStatus>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeDeletionsStatus()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteDeletion_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteDeletion_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function postDeletion_ByUserId(
    userId: string,
    data: { password: string | null; languageTag?: string | null }
  ): Promise<AxiosResponse<RequestDeleteResponse>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postDeletion_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeletionsStatus_ByUserId(userId: string): Promise<AxiosResponse<DeletionStatus>> {
    const $ = new DataDeletion$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeletionsStatus_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Cancel my account deletion request Requires valid user access token
     */
    deleteUserMeDeletion,
    /**
     * Submit my account deletion requests. Requires valid user access token This is for in-game only and require a valid platformId and platform token. If a full account is not logged by 3rd platform, then please use [/gdpr/public/namespaces/{namespace}/users/{userId}/deletions](#operations-Data_Deletion-PublicSubmitUserAccountDeletionRequest) ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
     */
    postUserMeDeletion,
    /**
     * Retrieve my account deletion status Requires valid user access token
     */
    getUsersMeDeletionsStatus,
    /**
     * Cancel user&#39;s account deletion request Requires valid user access token Scope: account
     */
    deleteDeletion_ByUserId,
    /**
     * Submit user&#39;s account deletion request. Requires valid user access token and password Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**
     */
    postDeletion_ByUserId,
    /**
     * Retrieve specific user&#39;s account deletion status Requires valid user access token Scope: account
     */
    getDeletionsStatus_ByUserId
  }
}
