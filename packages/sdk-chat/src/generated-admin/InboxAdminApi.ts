/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { AddInboxCategoryRequest } from '../generated-definitions/AddInboxCategoryRequest.js'
import { AddInboxCategoryResponse } from '../generated-definitions/AddInboxCategoryResponse.js'
import { GetInboxCategoriesResponseItemArray } from '../generated-definitions/GetInboxCategoriesResponseItemArray.js'
import { GetInboxMessagesResponse } from '../generated-definitions/GetInboxMessagesResponse.js'
import { GetInboxStatsResponse } from '../generated-definitions/GetInboxStatsResponse.js'
import { GetInboxUsersResponse } from '../generated-definitions/GetInboxUsersResponse.js'
import { InboxAdmin$ } from './endpoints/InboxAdmin$.js'
import { JsonSchemaType } from '../generated-definitions/JsonSchemaType.js'
import { SaveInboxMessageRequest } from '../generated-definitions/SaveInboxMessageRequest.js'
import { SaveInboxMessageResponse } from '../generated-definitions/SaveInboxMessageResponse.js'
import { SendInboxMessageRequest } from '../generated-definitions/SendInboxMessageRequest.js'
import { SendInboxMessageResponse } from '../generated-definitions/SendInboxMessageResponse.js'
import { UnsendInboxMessageRequest } from '../generated-definitions/UnsendInboxMessageRequest.js'
import { UnsendInboxMessageResponse } from '../generated-definitions/UnsendInboxMessageResponse.js'
import { UpdateInboxCategoryRequest } from '../generated-definitions/UpdateInboxCategoryRequest.js'
import { UpdateInboxMessageRequest } from '../generated-definitions/UpdateInboxMessageRequest.js'

export function InboxAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Get inbox stats
   */
  async function getInboxStats(queryParams?: { messageId?: string[] }): Promise<GetInboxStatsResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInboxStats(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get inbox messages
   */
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
  }): Promise<GetInboxMessagesResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInboxMessages(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Save inbox message
   */
  async function createInboxMessage(data: SaveInboxMessageRequest): Promise<SaveInboxMessageResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInboxMessage(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get inbox categories
   */
  async function getInboxCategories(): Promise<GetInboxCategoriesResponseItemArray> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getInboxCategories()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add inbox category.
   */
  async function createInboxCategory(data: AddInboxCategoryRequest): Promise<AddInboxCategoryResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createInboxCategory(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete inbox message
   */
  async function deleteInboxMessage_ByMessageId(messageId: string, queryParams?: { force?: boolean | null }): Promise<unknown> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteInboxMessage_ByMessageId(messageId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update inbox message
   */
  async function patchInboxMessage_ByMessageId(messageId: string, data: UpdateInboxMessageRequest): Promise<unknown> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchInboxMessage_ByMessageId(messageId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Delete inbox category
   */
  async function deleteInboxCategory_ByCategory(category: string): Promise<unknown> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteInboxCategory_ByCategory(category)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update inbox category
   */
  async function patchInboxCategory_ByCategory(category: string, data: UpdateInboxCategoryRequest): Promise<unknown> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchInboxCategory_ByCategory(category, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get inbox users
   */
  async function getUsersInbox_ByInbox(
    inbox: string,
    queryParams?: { limit?: number; offset?: number; status?: 'READ' | 'UNREAD'; userId?: string | null }
  ): Promise<GetInboxUsersResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUsersInbox_ByInbox(inbox, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Unsend inbox message
   */
  async function createUnsendInbox_ByInbox(inbox: string, data: UnsendInboxMessageRequest): Promise<UnsendInboxMessageResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUnsendInbox_ByInbox(inbox, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Send inbox message
   */
  async function createSendInbox_ByMessageId(messageId: string, data: SendInboxMessageRequest): Promise<SendInboxMessageResponse> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createSendInbox_ByMessageId(messageId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get category schema.
   */
  async function getSchemaJsonInbox_ByCategory(category: string): Promise<JsonSchemaType> {
    const $ = new InboxAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getSchemaJsonInbox_ByCategory(category)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getInboxStats,
    getInboxMessages,
    createInboxMessage,
    getInboxCategories,
    createInboxCategory,
    deleteInboxMessage_ByMessageId,
    patchInboxMessage_ByMessageId,
    deleteInboxCategory_ByCategory,
    patchInboxCategory_ByCategory,
    getUsersInbox_ByInbox,
    createUnsendInbox_ByInbox,
    createSendInbox_ByMessageId,
    getSchemaJsonInbox_ByCategory
  }
}
