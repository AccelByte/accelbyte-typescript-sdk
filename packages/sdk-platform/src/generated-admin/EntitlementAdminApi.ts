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
import { AdminEntitlementDecrement } from '../generated-definitions/AdminEntitlementDecrement.js'
import { AdminEntitlementSoldRequest } from '../generated-definitions/AdminEntitlementSoldRequest.js'
import { AppEntitlementInfo } from '../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { BulkEntitlementGrantRequest } from '../generated-definitions/BulkEntitlementGrantRequest.js'
import { BulkEntitlementGrantResult } from '../generated-definitions/BulkEntitlementGrantResult.js'
import { BulkEntitlementRevokeResult } from '../generated-definitions/BulkEntitlementRevokeResult.js'
import { BulkOperationResult } from '../generated-definitions/BulkOperationResult.js'
import { EntitlementConfigInfo } from '../generated-definitions/EntitlementConfigInfo.js'
import { EntitlementDecrementResult } from '../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementGrant } from '../generated-definitions/EntitlementGrant.js'
import { EntitlementHistoryInfoArray } from '../generated-definitions/EntitlementHistoryInfoArray.js'
import { EntitlementIfc } from '../generated-definitions/EntitlementIfc.js'
import { EntitlementInfo } from '../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementPlatformConfigInfo } from '../generated-definitions/EntitlementPlatformConfigInfo.js'
import { EntitlementPlatformConfigUpdate } from '../generated-definitions/EntitlementPlatformConfigUpdate.js'
import { EntitlementPrechekResult } from '../generated-definitions/EntitlementPrechekResult.js'
import { EntitlementRevokeRequest } from '../generated-definitions/EntitlementRevokeRequest.js'
import { EntitlementSoldResult } from '../generated-definitions/EntitlementSoldResult.js'
import { EntitlementUpdate } from '../generated-definitions/EntitlementUpdate.js'
import { Ownership } from '../generated-definitions/Ownership.js'
import { RevokeUseCountRequest } from '../generated-definitions/RevokeUseCountRequest.js'
import { StackableEntitlementInfoArray } from '../generated-definitions/StackableEntitlementInfoArray.js'
import { TimedOwnership } from '../generated-definitions/TimedOwnership.js'
import { EntitlementAdmin$ } from './endpoints/EntitlementAdmin$.js'

export function EntitlementAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEntitlements(queryParams?: {
    activeOnly?: boolean | null
    appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    entitlementName?: string | null
    itemId?: string[]
    limit?: number
    offset?: number
    origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    userId?: string | null
  }): Promise<AxiosResponse<EntitlementPagingSlicedResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlements(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEntitlementGrant(data: BulkEntitlementGrantRequest): Promise<AxiosResponse<BulkEntitlementGrantResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEntitlementGrant(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEntitlementRevoke(data: string[]): Promise<AxiosResponse<BulkEntitlementRevokeResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEntitlementRevoke(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByItemIds(queryParams?: {
    activeOnly?: boolean | null
    itemIds?: string[]
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<EntitlementPagingSlicedResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByItemIds(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsConfigInfo(queryParams?: { withoutCache?: boolean | null }): Promise<AxiosResponse<EntitlementConfigInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsConfigInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      activeOnly?: boolean | null
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      collectionId?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      fuzzyMatchName?: boolean | null
      itemId?: string[]
      limit?: number
      offset?: number
      origin?: 'Epic' | 'GooglePlay' | 'IOS' | 'Nintendo' | 'Oculus' | 'Other' | 'Playstation' | 'Steam' | 'System' | 'Twitch' | 'Xbox'
    }
  ): Promise<AxiosResponse<EntitlementPagingSlicedResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEntitlement_ByUserId(
    userId: string,
    data: EntitlementGrant[]
  ): Promise<AxiosResponse<StackableEntitlementInfoArray>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEntitlement_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlement_ByEntitlementId(entitlementId: string): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlement_ByEntitlementId(entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEntitlementRevoke_ByUserId(userId: string): Promise<AxiosResponse<BulkOperationResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEntitlementRevoke_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null; activeOnly?: boolean | null }
  ): Promise<AxiosResponse<AppEntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      activeOnly?: boolean | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; activeOnly?: boolean | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<AppEntitlementPagingSlicedResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<AxiosResponse<EntitlementInfoArray>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementConfig_ByPlatform(platform: string): Promise<AxiosResponse<EntitlementPlatformConfigInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementConfig_ByPlatform(platform)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEntitlementConfig_ByPlatform(
    platform: string,
    data: EntitlementPlatformConfigUpdate
  ): Promise<AxiosResponse<EntitlementPlatformConfigInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEntitlementConfig_ByPlatform(platform, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEntitlementRevokeById_ByUserId(
    userId: string,
    queryParams: { entitlementIds: string | null }
  ): Promise<AxiosResponse<BulkOperationResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEntitlementRevokeById_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; platform?: string | null; skus?: string[] }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEntitlement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementUpdate
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEntitlement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipAnyOf_ByUserId(
    userId: string,
    queryParams: { itemIds: string[]; platform?: string | null }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipAnyOf_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEntitlementConfigEntitlementOriginEnable(): Promise<AxiosResponse<EntitlementConfigInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEntitlementConfigEntitlementOriginEnable()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      platform?: string | null
    }
  ): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[]; platform?: string | null }
  ): Promise<AxiosResponse<EntitlementOwnershipArray>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementSoldRequest
  ): Promise<AxiosResponse<EntitlementSoldResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSell_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEnable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEnable_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevoke_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementRevokeRequest
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevoke_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDisable_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDisable_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getHistory_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string
  ): Promise<AxiosResponse<EntitlementHistoryInfoArray>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistory_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: AdminEntitlementDecrement
  ): Promise<AxiosResponse<EntitlementDecrementResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDecrement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateRevokeByUseCount_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: RevokeUseCountRequest
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevokeByUseCount_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createRevokeByUseCount_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: RevokeUseCountRequest
  ): Promise<AxiosResponse<EntitlementIfc>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRevokeByUseCount_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    queryParams: { quantity: number }
  ): Promise<AxiosResponse<EntitlementPrechekResult>> {
    const $ = new EntitlementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId(userId, entitlementId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query entitlements.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlements,
    /**
     * Grant entitlements to multiple users, skipped granting will be treated as fail.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk grant entitlements result&lt;/li&gt;&lt;/ul&gt;
     */
    createEntitlementGrant,
    /**
     * Revoke entitlements, skipped revocation will be treated as fail.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk revoke entitlements result&lt;/li&gt;&lt;/ul&gt;
     */
    createEntitlementRevoke,
    /**
     * Query entitlements by Item Ids.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsByItemIds,
    /**
     * Get entitlement config info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsConfigInfo,
    /**
     * Query entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlements_ByUserId,
    /**
     * Grant user entitlement.&lt;br&gt;&lt;br&gt;Notes: &lt;br&gt;&lt;br&gt;will skip un-supported item if input un-supported item types, please use /admin/namespaces/{namespace}/users/{userId}/fulfillment endpoint if want to fulfill other item type, like coin item&lt;br&gt;&lt;br&gt;Support Item Types:&lt;ul&gt;&lt;li&gt;&lt;i&gt;APP&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;INGAMEITEM&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;CODE&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;SUBSCRIPTION&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;MEDIA&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;OPTIONBOX&lt;/i&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;LOOTBOX&lt;/i&gt;&lt;/li&gt;&lt;/ul&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: granted entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    createEntitlement_ByUserId,
    /**
     * Get entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlement_ByEntitlementId,
    /**
     * Get user entitlement by sku.
     */
    getEntitlementsBySku_ByUserId,
    /**
     * Revoke all entitlements of a user (This API is for testing purpose only)&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoked entitlements count&lt;/li&gt;&lt;/ul&gt;
     */
    updateEntitlementRevoke_ByUserId,
    /**
     * Get user app entitlement by appId.
     */
    getEntitlementsByAppId_ByUserId,
    /**
     * Get user entitlement by itemId.
     */
    getEntitlementsByItemId_ByUserId,
    /**
     * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsByAppType_ByUserId,
    /**
     * Get user entitlements by itemIds.
     */
    getEntitlementsByItemIds_ByUserId,
    /**
     * Get platform entitlement config list.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementConfig_ByPlatform,
    /**
     * Update platform entitlement config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: platform entitlement config&lt;/li&gt;&lt;/ul&gt;
     */
    updateEntitlementConfig_ByPlatform,
    /**
     * Revoke user&#39;s entitlements by ids.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlements count&lt;/li&gt;&lt;/ul&gt;
     */
    updateEntitlementRevokeById_ByUserId,
    /**
     * Exists any user active entitlement of specified itemIds, skus and appIds
     */
    getEntitlementsOwnershipAny_ByUserId,
    /**
     * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlement_ByUserId_ByEntitlementId,
    /**
     * Update user entitlement. If update CONSUMABLE entitlement useCount to 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateEntitlement_ByUserId_ByEntitlementId,
    /**
     * Exists any user active entitlement of specified items.
     */
    getEntitlementsOwnershipAnyOf_ByUserId,
    /**
     * Get user entitlement ownership by sku.
     */
    getEntitlementsOwnershipBySku_ByUserId,
    /**
     * Enable Entitlement origin feature.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement info&lt;/li&gt;&lt;/ul&gt;
     */
    updateEntitlementConfigEntitlementOriginEnable,
    /**
     * Get user app entitlement ownership by appId.
     */
    getEntitlementsOwnershipByAppId_ByUserId,
    /**
     * Get user entitlement ownership by itemId.
     */
    getEntitlementsOwnershipByItemId_ByUserId,
    /**
     * Get user entitlement ownership by itemIds.
     */
    getEntitlementsOwnershipByItemIds_ByUserId,
    /**
     * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateSell_ByUserId_ByEntitlementId,
    /**
     * Enable user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: enable entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateEnable_ByUserId_ByEntitlementId,
    /**
     * Revoke user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevoke_ByUserId_ByEntitlementId,
    /**
     * Disable user entitlement if entitlement, only active entitlement can be disable, disabled entitlement can&#39;t consume.&lt;br&gt;&lt;b&gt;Like revoke, it will lose the entitlement ownership, except disabled entitlement can enable.&lt;/b&gt;&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: disable entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateDisable_ByUserId_ByEntitlementId,
    /**
     * Get user entitlement histories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of entitlement history&lt;/li&gt;&lt;/ul&gt;
     */
    getHistory_ByUserId_ByEntitlementId,
    /**
     * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateDecrement_ByUserId_ByEntitlementId,
    /**
     * @deprecated
     * Revoke specified use count of user entitlement. please use /{entitlementId}/revoke/byUseCount endpoint instead of this endpoint&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateRevokeByUseCount_ByUserId_ByEntitlementId,
    /**
     * Revoke specified count of user entitlement.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: The revoked entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    createRevokeByUseCount_ByUserId_ByEntitlementId,
    /**
     * Checks if specified use count of user entitlement can be revoked without actually revoking it.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: true if revokable, false otherwise&lt;/li&gt;&lt;/ul&gt;
     */
    getRevokeByUseCountPreCheck_ByUserId_ByEntitlementId
  }
}
