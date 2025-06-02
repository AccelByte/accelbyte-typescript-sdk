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
import { AuditCommentCreateRequest } from '../generated-definitions/AuditCommentCreateRequest.js'
import { AuditCommentUpdateRequest } from '../generated-definitions/AuditCommentUpdateRequest.js'
import { AuditLogCommentInfo } from '../generated-definitions/AuditLogCommentInfo.js'
import { PaginatedAuditLogCommentsResponse } from '../generated-definitions/PaginatedAuditLogCommentsResponse.js'
import { AuditLogCommentAdmin$ } from './endpoints/AuditLogCommentAdmin$.js'

export function AuditLogCommentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getComments(queryParams: {
    logId: string | null
    limit?: number
    offset?: number
    order?: -1 | 1
  }): Promise<AxiosResponse<PaginatedAuditLogCommentsResponse>> {
    const $ = new AuditLogCommentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getComments(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createComment(data: AuditCommentCreateRequest): Promise<AxiosResponse<AuditLogCommentInfo>> {
    const $ = new AuditLogCommentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createComment(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteComment_ByCommentId(commentId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AuditLogCommentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteComment_ByCommentId(commentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchComment_ByCommentId(commentId: string, data: AuditCommentUpdateRequest): Promise<AxiosResponse<AuditLogCommentInfo>> {
    const $ = new AuditLogCommentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchComment_ByCommentId(commentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteComment_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AuditLogCommentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteComment_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is used to query audit comments. Only support user access token. Backend will automatically populate displayName information from IAM, fail attempt will return empty display name on actorDisplayName response. actorDisplayName will refer to user uniqueDisplayName if set, then fallback to displayName if not set.
     */
    getComments,
    /**
     * This API is used to create audit comment. Only support user access token. actorDisplayName will refer to user displayName not a uniqueDisplayName.
     */
    createComment,
    /**
     * This API is used to delete audit comment by Id. Only support user access token. This action will remove comment permanently from database.
     */
    deleteComment_ByCommentId,
    /**
     * This API is used to update audit comment. Only support user access token. The path namespace should align with audit log objectNamespace. actorDisplayName will refer to user displayName not a uniqueDisplayName.
     */
    patchComment_ByCommentId,
    /**
     * This API is used to mask audit comments related to specific userId. For example: for GDPR account deletion. Comment.actorUserId will be set to &#34;Anonymous&#34; and Comment.isActorActive to false. This process is asynchronous and return http status code 202.
     */
    deleteComment_ByUserId
  }
}
