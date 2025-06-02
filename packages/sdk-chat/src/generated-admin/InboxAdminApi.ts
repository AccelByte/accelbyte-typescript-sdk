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
import { AddInboxCategoryRequest } from '../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../generated-definitions/GetInboxUsersResponse.js'
import { GetListTopicKafkaResponse } from '../generated-definitions/GetListTopicKafkaResponse.js'
import { JsonSchemaType } from '../generated-definitions/JsonSchemaType.js'
import { SaveInboxMessageRequest } from '../generated-definitions/SaveInboxMessageRequest.js'
import { SaveInboxMessageResponse } from '../generated-definitions/SaveInboxMessageResponse.js'
import { SendInboxMessageRequest } from '../generated-definitions/SendInboxMessageRequest.js'
import { SendInboxMessageResponse } from '../generated-definitions/SendInboxMessageResponse.js'
import { UnsendInboxMessageRequest } from '../generated-definitions/UnsendInboxMessageRequest.js'
import { UnsendInboxMessageResponse } from '../generated-definitions/UnsendInboxMessageResponse.js'
import { UpdateInboxCategoryRequest } from '../generated-definitions/UpdateInboxCategoryRequest.js'
import { UpdateInboxMessageRequest } from '../generated-definitions/UpdateInboxMessageRequest.js'
import { InboxAdmin$ } from './endpoints/InboxAdmin$.js'

export function InboxAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getInboxStats(queryParams?: { messageId?: string[] }): Promise<AxiosResponse<GetInboxStatsResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInboxStats(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInboxMessages(queryParams?: {
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
  }): Promise<AxiosResponse<GetInboxMessagesResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInboxMessages(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInboxMessage(data: SaveInboxMessageRequest): Promise<AxiosResponse<SaveInboxMessageResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInboxMessage(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInboxCategories(): Promise<AxiosResponse<GetInboxCategoriesResponseItemArray>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInboxCategories()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createInboxCategory(data: AddInboxCategoryRequest): Promise<AxiosResponse<AddInboxCategoryResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInboxCategory(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInboxListTopicKafka(): Promise<AxiosResponse<GetListTopicKafkaResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInboxListTopicKafka()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInboxMessage_ByMessageId(
    messageId: string,
    queryParams?: { force?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInboxMessage_ByMessageId(messageId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchInboxMessage_ByMessageId(messageId: string, data: UpdateInboxMessageRequest): Promise<AxiosResponse<unknown>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchInboxMessage_ByMessageId(messageId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteInboxCategory_ByCategory(category: string): Promise<AxiosResponse<unknown>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInboxCategory_ByCategory(category)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchInboxCategory_ByCategory(category: string, data: UpdateInboxCategoryRequest): Promise<AxiosResponse<unknown>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchInboxCategory_ByCategory(category, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersInbox_ByInbox(
    inbox: string,
    queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null }
  ): Promise<AxiosResponse<GetInboxUsersResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersInbox_ByInbox(inbox, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnsendInbox_ByInbox(
    inbox: string,
    data: UnsendInboxMessageRequest
  ): Promise<AxiosResponse<UnsendInboxMessageResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnsendInbox_ByInbox(inbox, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSendInbox_ByMessageId(
    messageId: string,
    data: SendInboxMessageRequest
  ): Promise<AxiosResponse<SendInboxMessageResponse>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSendInbox_ByMessageId(messageId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSchemaJsonInbox_ByCategory(category: string): Promise<AxiosResponse<JsonSchemaType>> {
    const $ = new InboxAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSchemaJsonInbox_ByCategory(category)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get inbox stats
     */
    getInboxStats,
    /**
     * Get inbox messages
     */
    getInboxMessages,
    /**
     * Save inbox message
     */
    createInboxMessage,
    /**
     * Get inbox categories
     */
    getInboxCategories,
    /**
     * Add inbox category.
     */
    createInboxCategory,
    /**
     * Get list kafka topic. example result chat,sessionNotification
     */
    getInboxListTopicKafka,
    /**
     * Delete inbox message
     */
    deleteInboxMessage_ByMessageId,
    /**
     * Update inbox message
     */
    patchInboxMessage_ByMessageId,
    /**
     * Delete inbox category
     */
    deleteInboxCategory_ByCategory,
    /**
     * Update inbox category
     */
    patchInboxCategory_ByCategory,
    /**
     * Get inbox users
     */
    getUsersInbox_ByInbox,
    /**
     * Unsend inbox message
     */
    updateUnsendInbox_ByInbox,
    /**
     * Send inbox message
     */
    updateSendInbox_ByMessageId,
    /**
     * Get category schema.
     */
    getSchemaJsonInbox_ByCategory
  }
}
