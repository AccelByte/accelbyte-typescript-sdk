/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AddInboxCategoryRequest } from '../../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../../generated-definitions/GetInboxUsersResponse.js'
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
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get inbox stats
   */
  getInboxStats(queryParams?: { messageId?: string[] }): Promise<IResponse<GetInboxStatsResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/stats'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetInboxStatsResponse, 'GetInboxStatsResponse')
      : Validate.unsafeResponse(() => resultPromise)
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
  }): Promise<IResponse<GetInboxMessagesResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetInboxMessagesResponse, 'GetInboxMessagesResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Save inbox message
   */
  createInboxMessage(data: SaveInboxMessageRequest): Promise<IResponse<SaveInboxMessageResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SaveInboxMessageResponse, 'SaveInboxMessageResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get inbox categories
   */
  getInboxCategories(): Promise<IResponse<GetInboxCategoriesResponseItemArray>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetInboxCategoriesResponseItemArray, 'GetInboxCategoriesResponseItemArray')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Add inbox category.
   */
  createInboxCategory(data: AddInboxCategoryRequest): Promise<IResponse<AddInboxCategoryResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, AddInboxCategoryResponse, 'AddInboxCategoryResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete inbox message
   */
  deleteInboxMessage_ByMessageId(messageId: string, queryParams?: { force?: boolean | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/message/{messageId}'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update inbox message
   */
  patchInboxMessage_ByMessageId(messageId: string, data: UpdateInboxMessageRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete inbox category
   */
  deleteInboxCategory_ByCategory(category: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update inbox category
   */
  patchInboxCategory_ByCategory(category: string, data: UpdateInboxCategoryRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get inbox users
   */
  getUsersInbox_ByInbox(
    inbox: string,
    queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null }
  ): Promise<IResponse<GetInboxUsersResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/users'
      .replace('{namespace}', this.namespace)
      .replace('{inbox}', inbox)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetInboxUsersResponse, 'GetInboxUsersResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Unsend inbox message
   */
  createUnsendInbox_ByInbox(inbox: string, data: UnsendInboxMessageRequest): Promise<IResponse<UnsendInboxMessageResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{inbox}/unsend'
      .replace('{namespace}', this.namespace)
      .replace('{inbox}', inbox)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, UnsendInboxMessageResponse, 'UnsendInboxMessageResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Send inbox message
   */
  createSendInbox_ByMessageId(messageId: string, data: SendInboxMessageRequest): Promise<IResponse<SendInboxMessageResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/messages/{messageId}/send'
      .replace('{namespace}', this.namespace)
      .replace('{messageId}', messageId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, SendInboxMessageResponse, 'SendInboxMessageResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get category schema.
   */
  getSchemaJsonInbox_ByCategory(category: string): Promise<IResponse<JsonSchemaType>> {
    const params = {} as SDKRequestConfig
    const url = '/chat/v1/admin/inbox/namespaces/{namespace}/categories/{category}/schema.json'
      .replace('{namespace}', this.namespace)
      .replace('{category}', category)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, JsonSchemaType, 'JsonSchemaType')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
