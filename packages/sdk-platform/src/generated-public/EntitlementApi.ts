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
import { AppEntitlementInfo } from '../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { EntitlementDecrementResult } from '../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from '../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from '../generated-definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from '../generated-definitions/EntitlementSoldResult.js'
import { EntitlementSplitRequest } from '../generated-definitions/EntitlementSplitRequest.js'
import { EntitlementSplitResult } from '../generated-definitions/EntitlementSplitResult.js'
import { EntitlementTransferRequest } from '../generated-definitions/EntitlementTransferRequest.js'
import { EntitlementTransferResult } from '../generated-definitions/EntitlementTransferResult.js'
import { Ownership } from '../generated-definitions/Ownership.js'
import { OwnershipToken } from '../generated-definitions/OwnershipToken.js'
import { PublicEntitlementDecrement } from '../generated-definitions/PublicEntitlementDecrement.js'
import { TimedOwnership } from '../generated-definitions/TimedOwnership.js'
import { UserEntitlementHistoryPagingSlicedResultArray } from '../generated-definitions/UserEntitlementHistoryPagingSlicedResultArray.js'
import { Entitlement$ } from './endpoints/Entitlement$.js'

export function EntitlementApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEntitlements_ByUserId(
    userId: string,
    queryParams?: {
      appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      entitlementName?: string | null
      features?: string[]
      itemId?: string[]
      limit?: number
      offset?: number
    }
  ): Promise<AxiosResponse<EntitlementPagingSlicedResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlements_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByIds_ByUserId(
    userId: string,
    queryParams?: { availablePlatformOnly?: boolean | null; ids?: string[] }
  ): Promise<AxiosResponse<EntitlementInfoArray>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null }
  ): Promise<AxiosResponse<AppEntitlementInfo>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsHistory_ByUserId(
    userId: string,
    queryParams?: {
      endDate?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      startDate?: string | null
    }
  ): Promise<AxiosResponse<UserEntitlementHistoryPagingSlicedResultArray>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsHistory_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeEntitlementsOwnershipAny(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<AxiosResponse<Ownership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeEntitlementsOwnershipAny(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeEntitlementsOwnershipToken(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<AxiosResponse<OwnershipToken>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeEntitlementsOwnershipToken(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; limit?: number; offset?: number }
  ): Promise<AxiosResponse<AppEntitlementPagingSlicedResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsByAppType_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeEntitlementsOwnershipBySku(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<AxiosResponse<Ownership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeEntitlementsOwnershipByAppId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeEntitlementsOwnershipByItemId(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipAny_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<AxiosResponse<EntitlementInfo>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlement_ByUserId_ByEntitlementId(userId, entitlementId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipBySku_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByAppId_ByUserId(
    userId: string,
    queryParams: { appId: string | null }
  ): Promise<AxiosResponse<Ownership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByAppId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<AxiosResponse<TimedOwnership>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByItemId_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<AxiosResponse<EntitlementOwnershipArray>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEntitlementsOwnershipByItemIds_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSoldRequest
  ): Promise<AxiosResponse<EntitlementSoldResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSell_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSplit_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSplitRequest
  ): Promise<AxiosResponse<EntitlementSplitResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSplit_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateTransfer_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementTransferRequest
  ): Promise<AxiosResponse<EntitlementTransferResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTransfer_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: PublicEntitlementDecrement
  ): Promise<AxiosResponse<EntitlementDecrementResult>> {
    const $ = new Entitlement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDecrement_ByUserId_ByEntitlementId(userId, entitlementId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Query user entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlements_ByUserId,
    /**
     * Get user entitlements by ids..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsByIds_ByUserId,
    /**
     * @deprecated
     * Get user entitlement by sku.
     */
    getEntitlementsBySku_ByUserId,
    /**
     * Get user app entitlement by appId.
     */
    getEntitlementsByAppId_ByUserId,
    /**
     * Get user entitlement history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user entitlement history list&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsHistory_ByUserId,
    /**
     * Exists any my active entitlement of specified itemIds, skus and appIds
     */
    getUsersMeEntitlementsOwnershipAny,
    /**
     * @deprecated
     * Get user entitlement by itemId.
     */
    getEntitlementsByItemId_ByUserId,
    /**
     * Gets an entitlement ownership token of specified itemIds, skus and appIds&lt;p&gt;The decoded ownership token header like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;kid&#34;: &#34;9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4&#34;, &#34;typ&#34;: &#34;JWT&#34;, &#34;alg&#34;: &#34;RS256&#34; } &lt;/code&gt;&lt;/pre&gt;That you can get the jwks by api &lt;baseUrl&gt;/platform/jwks, if the configured private key is same as IAM, &lt;p&gt;you can also get jwks from IAM endpoint. &lt;p&gt;The decoded ownership token payload like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;entitlements&#34;: [ { &#34;itemId&#34;: &#34;4c1296291f604c199f7bb7f0ee02e5f8&#34;, &#34;appType&#34;: null, &#34;appId&#34;: null, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;prime-plus&#34; }, { &#34;itemId&#34;: &#34;e8f4974cf45c4e1f8d4f0c6990c518bd&#34;, &#34;appType&#34;: &#34;GAME&#34;, &#34;appId&#34;: &#34;omeganebula&#34;, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;APPG005ON&#34; } ], &#34;sub&#34;: &#34;66459eb6a4e44e6fb0040bd20c1079a5&#34;, &#34;exp&#34;: 1619624360, &#34;iat&#34;: 1619624060 } &lt;/code&gt;&lt;/pre&gt;&lt;b&gt;if there&#39;s no active entitlement for the specific params, the entitlements section will be omitted&lt;/b&gt;.
     */
    getUsersMeEntitlementsOwnershipToken,
    /**
     * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlementsByAppType_ByUserId,
    /**
     * Get my entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeEntitlementsOwnershipBySku,
    /**
     * Get my app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace app entitlement ownership&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeEntitlementsOwnershipByAppId,
    /**
     * Get my entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
     */
    getUsersMeEntitlementsOwnershipByItemId,
    /**
     * Exists any user active entitlement of specified itemIds, skus and appIds
     */
    getEntitlementsOwnershipAny_ByUserId,
    /**
     * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    getEntitlement_ByUserId_ByEntitlementId,
    /**
     * Get user entitlement ownership by sku.
     */
    getEntitlementsOwnershipBySku_ByUserId,
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
     * Split a specified use count of entitlement and create a new entitlement with splitting use count.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateSplit_ByUserId_ByEntitlementId,
    /**
     * Transfer a specified use count from entitlement A to B..Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateTransfer_ByUserId_ByEntitlementId,
    /**
     * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
     */
    updateDecrement_ByUserId_ByEntitlementId
  }
}
