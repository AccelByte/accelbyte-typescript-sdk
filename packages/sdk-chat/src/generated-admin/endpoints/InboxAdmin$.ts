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
import { AddInboxCategoryRequest } from '../../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../../generated-definitions/GetInboxUsersResponse.js'
import { GetListTopicKafkaResponse } from '../../generated-definitions/GetListTopicKafkaResponse.js'
import { JsonSchemaType } from '../../generated-definitions/JsonSchemaType.js'
import { SaveInboxMessageRequest } from '../../generated-definitions/SaveInboxMessageRequest.js'
import { SaveInboxMessageResponse } from '../../generated-definitions/SaveInboxMessageResponse.js'
import { SendInboxMessageRequest } from '../../generated-definitions/SendInboxMessageRequest.js'
import { SendInboxMessageResponse } from '../../generated-definitions/SendInboxMessageResponse.js'
import { UnsendInboxMessageRequest } from '../../generated-definitions/UnsendInboxMessageRequest.js'
import { UnsendInboxMessageResponse } from '../../generated-definitions/UnsendInboxMessageResponse.js'
import { UpdateInboxCategoryRequest } from '../../generated-definitions/UpdateInboxCategoryRequest.js'
import { UpdateInboxMessageRequest } from '../../generated-definitions/UpdateInboxMessageRequest.js'

export class InboxAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get inbox stats
   */
  getInboxStats(queryParams?: { messageId?: string[] }): Promise<Response<GetInboxStatsResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetInboxStatsResponse, 'GetInboxStatsResponse')
  }
  /**
   * Get inbox messages
   */
  getInboxMessages(queryParams?: {
    activeOnly?: boolean | null
    endCreatedAt?: number
    limit?: number
    messageId?: string[]
    offset?: number
    order?: string | null
    scope?: 'NAMESPACE' | 'USER'
    startCreatedAt?: number
    status?: 'DRAFT' | 'SENT' | 'UNSENT'
    transient?: boolean | null
  }): Promise<Response<GetInboxMessagesResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetInboxMessagesResponse,
      'GetInboxMessagesResponse'
    )
  }
  /**
   * Save inbox message
   */
  createInboxMessage(data: SaveInboxMessageRequest): Promise<Response<SaveInboxMessageResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SaveInboxMessageResponse,
      'SaveInboxMessageResponse'
    )
  }
  /**
   * Get inbox categories
   */
  getInboxCategories(): Promise<Response<GetInboxCategoriesResponseItemArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetInboxCategoriesResponseItemArray,
      'GetInboxCategoriesResponseItemArray'
    )
  }
  /**
   * Add inbox category.
   */
  createInboxCategory(data: AddInboxCategoryRequest): Promise<Response<AddInboxCategoryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AddInboxCategoryResponse,
      'AddInboxCategoryResponse'
    )
  }
  /**
   * Get list kafka topic. example result chat,sessionNotification
   */
  getInboxListTopicKafka(): Promise<Response<GetListTopicKafkaResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/list/topic/kafka'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GetListTopicKafkaResponse,
      'GetListTopicKafkaResponse'
    )
  }
  /**
   * Delete inbox message
   */
  deleteInboxMessage_ByMessageId(messageId: string, queryParams?: { force?: boolean | null }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/message/{messageId}'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update inbox message
   */
  patchInboxMessage_ByMessageId(messageId: string, data: UpdateInboxMessageRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Delete inbox category
   */
  deleteInboxCategory_ByCategory(category: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update inbox category
   */
  patchInboxCategory_ByCategory(category: string, data: UpdateInboxCategoryRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get inbox users
   */
  getUsersInbox_ByInbox(
    inbox: string,
    queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null }
  ): Promise<Response<GetInboxUsersResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/users'
      .replace('{namespace}', this.namespace)
      .replace('{inbox}', inbox)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetInboxUsersResponse, 'GetInboxUsersResponse')
  }
  /**
   * Unsend inbox message
   */
  updateUnsendInbox_ByInbox(inbox: string, data: UnsendInboxMessageRequest): Promise<Response<UnsendInboxMessageResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/unsend'
      .replace('{namespace}', this.namespace)
      .replace('{inbox}', inbox)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UnsendInboxMessageResponse,
      'UnsendInboxMessageResponse'
    )
  }
  /**
   * Send inbox message
   */
  updateSendInbox_ByMessageId(messageId: string, data: SendInboxMessageRequest): Promise<Response<SendInboxMessageResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}/send'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      SendInboxMessageResponse,
      'SendInboxMessageResponse'
    )
  }
  /**
   * Get category schema.
   */
  getSchemaJsonInbox_ByCategory(category: string): Promise<Response<JsonSchemaType>> {
    const params = {} as AxiosRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}/schema.json'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, JsonSchemaType, 'JsonSchemaType')
  }
}
