/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { AuditCommentCreateRequest } from '../../generated-definitions/AuditCommentCreateRequest.js'
import { AuditCommentUpdateRequest } from '../../generated-definitions/AuditCommentUpdateRequest.js'
import { AuditLogCommentInfo } from '../../generated-definitions/AuditLogCommentInfo.js'
import { PaginatedAuditLogCommentsResponse } from '../../generated-definitions/PaginatedAuditLogCommentsResponse.js'

export class AuditLogCommentAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to query audit comments. Only support user access token. Backend will automatically populate displayName information from IAM, fail attempt will return empty display name on actorDisplayName response. actorDisplayName will refer to user uniqueDisplayName if set, then fallback to displayName if not set.
   */
  getComments(queryParams: {
    logId: string | null
    limit?: number
    offset?: number
    order?: -1 | 1
  }): Promise<Response<PaginatedAuditLogCommentsResponse>> {
    const params = { limit: 20, order: 1, ...queryParams } as AxiosRequestConfig
    const url = '/audit/v1/admin/namespaces/{namespace}/comments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PaginatedAuditLogCommentsResponse,
      'PaginatedAuditLogCommentsResponse'
    )
  }
  /**
   * This API is used to create audit comment. Only support user access token. actorDisplayName will refer to user displayName not a uniqueDisplayName.
   */
  createComment(data: AuditCommentCreateRequest): Promise<Response<AuditLogCommentInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespaces/{namespace}/comments'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AuditLogCommentInfo, 'AuditLogCommentInfo')
  }
  /**
   * This API is used to delete audit comment by Id. Only support user access token. This action will remove comment permanently from database.
   */
  deleteComment_ByCommentId(commentId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespaces/{namespace}/comments/{commentId}'
      .replace('{namespace}', this.namespace)
      .replace('{commentId}', commentId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to update audit comment. Only support user access token. The path namespace should align with audit log objectNamespace. actorDisplayName will refer to user displayName not a uniqueDisplayName.
   */
  patchComment_ByCommentId(commentId: string, data: AuditCommentUpdateRequest): Promise<Response<AuditLogCommentInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespaces/{namespace}/comments/{commentId}'
      .replace('{namespace}', this.namespace)
      .replace('{commentId}', commentId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AuditLogCommentInfo, 'AuditLogCommentInfo')
  }
  /**
   * This API is used to mask audit comments related to specific userId. For example: for GDPR account deletion. Comment.actorUserId will be set to &#34;Anonymous&#34; and Comment.isActorActive to false. This process is asynchronous and return http status code 202.
   */
  deleteComment_ByUserId(userId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/audit/v1/admin/namespaces/{namespace}/users/{userId}/comments'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
