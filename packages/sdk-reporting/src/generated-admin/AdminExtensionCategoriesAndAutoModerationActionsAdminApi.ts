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
import { ActionApiRequest } from '../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../generated-definitions/ActionListApiResponse.js'
import { AdminExtensionCategoriesAndAutoModerationActionsAdmin$ } from './endpoints/AdminExtensionCategoriesAndAutoModerationActionsAdmin$.js'
import { ExtensionCategoryApiRequest } from '../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../generated-definitions/ExtensionCategoryListApiResponse.js'

export function AdminExtensionCategoriesAndAutoModerationActionsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * Get a list of auto moderation actions
   */
  async function getExtensionActions(): Promise<ActionListApiResponse> {
    const $ = new AdminExtensionCategoriesAndAutoModerationActionsAdmin$(
      Network.create(requestConfig),
      namespace,
      cache,
      isValidationEnabled
    )
    const resp = await $.getExtensionActions()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create auto moderation action
   */
  async function createExtensionAction(data: ActionApiRequest): Promise<ActionApiResponse> {
    const $ = new AdminExtensionCategoriesAndAutoModerationActionsAdmin$(
      Network.create(requestConfig),
      namespace,
      cache,
      isValidationEnabled
    )
    const resp = await $.createExtensionAction(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get a list of extension category data with the specified name
   */
  async function getExtensionCategories(queryParams?: {
    order?: 'asc' | 'ascending' | 'desc' | 'descending'
    sortBy?: 'extensionCategory' | 'extensionCategoryName'
  }): Promise<ExtensionCategoryListApiResponse> {
    const $ = new AdminExtensionCategoriesAndAutoModerationActionsAdmin$(
      Network.create(requestConfig),
      namespace,
      cache,
      isValidationEnabled
    )
    const resp = await $.getExtensionCategories(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create extension category data
   */
  async function createExtensionCategory(data: ExtensionCategoryApiRequest): Promise<ExtensionCategoryApiResponse> {
    const $ = new AdminExtensionCategoriesAndAutoModerationActionsAdmin$(
      Network.create(requestConfig),
      namespace,
      cache,
      isValidationEnabled
    )
    const resp = await $.createExtensionCategory(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getExtensionActions,
    createExtensionAction,
    getExtensionCategories,
    createExtensionCategory
  }
}
