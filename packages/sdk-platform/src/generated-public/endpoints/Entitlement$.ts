/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AppEntitlementInfo } from '../../generated-definitions/AppEntitlementInfo.js'
import { AppEntitlementPagingSlicedResult } from '../../generated-definitions/AppEntitlementPagingSlicedResult.js'
import { EntitlementDecrementResult } from '../../generated-definitions/EntitlementDecrementResult.js'
import { EntitlementInfo } from '../../generated-definitions/EntitlementInfo.js'
import { EntitlementInfoArray } from '../../generated-definitions/EntitlementInfoArray.js'
import { EntitlementOwnershipArray } from '../../generated-definitions/EntitlementOwnershipArray.js'
import { EntitlementPagingSlicedResult } from '../../generated-definitions/EntitlementPagingSlicedResult.js'
import { EntitlementSoldRequest } from '../../generated-definitions/EntitlementSoldRequest.js'
import { EntitlementSoldResult } from '../../generated-definitions/EntitlementSoldResult.js'
import { EntitlementSplitRequest } from '../../generated-definitions/EntitlementSplitRequest.js'
import { EntitlementSplitResult } from '../../generated-definitions/EntitlementSplitResult.js'
import { EntitlementTransferRequest } from '../../generated-definitions/EntitlementTransferRequest.js'
import { EntitlementTransferResult } from '../../generated-definitions/EntitlementTransferResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { OwnershipToken } from '../../generated-definitions/OwnershipToken.js'
import { PublicEntitlementDecrement } from '../../generated-definitions/PublicEntitlementDecrement.js'
import { TimedOwnership } from '../../generated-definitions/TimedOwnership.js'
import { UserEntitlementHistoryPagingSlicedResultArray } from '../../generated-definitions/UserEntitlementHistoryPagingSlicedResultArray.js'

export class Entitlement$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Query user entitlements for a specific user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlements_ByUserId(
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
  ): Promise<Response<EntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EntitlementPagingSlicedResult,
      'EntitlementPagingSlicedResult'
    )
  }
  /**
   * Get user entitlements by ids..&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByIds_ByUserId(
    userId: string,
    queryParams?: { availablePlatformOnly?: boolean | null; ids?: string[] }
  ): Promise<Response<EntitlementInfoArray>> {
    const params = { availablePlatformOnly: true, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EntitlementInfoArray, 'EntitlementInfoArray')
  }
  /**
   * @deprecated
   * Get user entitlement by sku.
   */
  getEntitlementsBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<Response<EntitlementInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EntitlementInfo, 'EntitlementInfo')
  }
  /**
   * Get user app entitlement by appId.
   */
  getEntitlementsByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Response<AppEntitlementInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AppEntitlementInfo, 'AppEntitlementInfo')
  }
  /**
   * Get user entitlement history&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user entitlement history list&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsHistory_ByUserId(
    userId: string,
    queryParams?: {
      endDate?: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
      limit?: number
      offset?: number
      startDate?: string | null
    }
  ): Promise<Response<UserEntitlementHistoryPagingSlicedResultArray>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/history'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      UserEntitlementHistoryPagingSlicedResultArray,
      'UserEntitlementHistoryPagingSlicedResultArray'
    )
  }
  /**
   * Exists any my active entitlement of specified itemIds, skus and appIds
   */
  getUsersMeEntitlementsOwnershipAny(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<Response<Ownership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/any'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Ownership, 'Ownership')
  }
  /**
   * @deprecated
   * Get user entitlement by itemId.
   */
  getEntitlementsByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<Response<EntitlementInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EntitlementInfo, 'EntitlementInfo')
  }
  /**
   * Gets an entitlement ownership token of specified itemIds, skus and appIds&lt;p&gt;The decoded ownership token header like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;kid&#34;: &#34;9fd4cd5f991cebe3323605cd12d3b8bfdfc73fa4&#34;, &#34;typ&#34;: &#34;JWT&#34;, &#34;alg&#34;: &#34;RS256&#34; } &lt;/code&gt;&lt;/pre&gt;That you can get the jwks by api &lt;baseUrl&gt;/platform/jwks, if the configured private key is same as IAM, &lt;p&gt;you can also get jwks from IAM endpoint. &lt;p&gt;The decoded ownership token payload like below:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;entitlements&#34;: [ { &#34;itemId&#34;: &#34;4c1296291f604c199f7bb7f0ee02e5f8&#34;, &#34;appType&#34;: null, &#34;appId&#34;: null, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;prime-plus&#34; }, { &#34;itemId&#34;: &#34;e8f4974cf45c4e1f8d4f0c6990c518bd&#34;, &#34;appType&#34;: &#34;GAME&#34;, &#34;appId&#34;: &#34;omeganebula&#34;, &#34;namespace&#34;: &#34;accelbyte&#34;, &#34;itemNamespace&#34;: &#34;accelbyte&#34;, &#34;sku&#34;: &#34;APPG005ON&#34; } ], &#34;sub&#34;: &#34;66459eb6a4e44e6fb0040bd20c1079a5&#34;, &#34;exp&#34;: 1619624360, &#34;iat&#34;: 1619624060 } &lt;/code&gt;&lt;/pre&gt;&lt;b&gt;if there&#39;s no active entitlement for the specific params, the entitlements section will be omitted&lt;/b&gt;.
   */
  getUsersMeEntitlementsOwnershipToken(queryParams?: {
    appIds?: string[]
    itemIds?: string[]
    skus?: string[]
  }): Promise<Response<OwnershipToken>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownershipToken'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, OwnershipToken, 'OwnershipToken')
  }
  /**
   * Query app entitlements by appType.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: app entitlement pagination&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlementsByAppType_ByUserId(
    userId: string,
    queryParams: { appType: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE'; limit?: number; offset?: number }
  ): Promise<Response<AppEntitlementPagingSlicedResult>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/byAppType'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AppEntitlementPagingSlicedResult,
      'AppEntitlementPagingSlicedResult'
    )
  }
  /**
   * Get my entitlement ownership by sku.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipBySku(queryParams: {
    sku: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<Response<TimedOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/bySku'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TimedOwnership, 'TimedOwnership')
  }
  /**
   * Get my app entitlement ownership by appId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace app entitlement ownership&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipByAppId(queryParams: { appId: string | null }): Promise<Response<Ownership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byAppId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Ownership, 'Ownership')
  }
  /**
   * Get my entitlement ownership by itemId.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Path&#39;s namespace&lt;/i&gt; : &lt;ul&gt;&lt;li&gt;can be filled with &lt;b&gt;publisher namespace&lt;/b&gt; in order to get &lt;b&gt;publisher namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;li&gt;can be filled with &lt;b&gt;game namespace&lt;/b&gt; in order to get &lt;b&gt;game namespace entitlement ownership by sku&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;
   */
  getUsersMeEntitlementsOwnershipByItemId(queryParams: {
    itemId: string | null
    entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
  }): Promise<Response<TimedOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/me/entitlements/ownership/byItemId'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TimedOwnership, 'TimedOwnership')
  }
  /**
   * Exists any user active entitlement of specified itemIds, skus and appIds
   */
  getEntitlementsOwnershipAny_ByUserId(
    userId: string,
    queryParams?: { appIds?: string[]; itemIds?: string[]; skus?: string[] }
  ): Promise<Response<Ownership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/any'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Ownership, 'Ownership')
  }
  /**
   * Get user entitlement.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  getEntitlement_ByUserId_ByEntitlementId(userId: string, entitlementId: string): Promise<Response<EntitlementInfo>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EntitlementInfo, 'EntitlementInfo')
  }
  /**
   * Get user entitlement ownership by sku.
   */
  getEntitlementsOwnershipBySku_ByUserId(
    userId: string,
    queryParams: {
      sku: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<Response<TimedOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/bySku'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TimedOwnership, 'TimedOwnership')
  }
  /**
   * Get user app entitlement ownership by appId.
   */
  getEntitlementsOwnershipByAppId_ByUserId(userId: string, queryParams: { appId: string | null }): Promise<Response<Ownership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byAppId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, Ownership, 'Ownership')
  }
  /**
   * Get user entitlement ownership by itemId.
   */
  getEntitlementsOwnershipByItemId_ByUserId(
    userId: string,
    queryParams: {
      itemId: string | null
      entitlementClazz?: 'APP' | 'CODE' | 'ENTITLEMENT' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SUBSCRIPTION'
    }
  ): Promise<Response<TimedOwnership>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemId'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, TimedOwnership, 'TimedOwnership')
  }
  /**
   * Get user entitlement ownership by itemIds.
   */
  getEntitlementsOwnershipByItemIds_ByUserId(
    userId: string,
    queryParams?: { ids?: string[] }
  ): Promise<Response<EntitlementOwnershipArray>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/ownership/byItemIds'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EntitlementOwnershipArray,
      'EntitlementOwnershipArray'
    )
  }
  /**
   * Sell user entitlement. If the entitlement is consumable, useCount is 0, the status will be CONSUMED. If the entitlement is durable, the status will be SOLD. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateSell_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSoldRequest
  ): Promise<Response<EntitlementSoldResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/sell'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EntitlementSoldResult, 'EntitlementSoldResult')
  }
  /**
   * Split a specified use count of entitlement and create a new entitlement with splitting use count.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateSplit_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementSplitRequest
  ): Promise<Response<EntitlementSplitResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/split'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EntitlementSplitResult,
      'EntitlementSplitResult'
    )
  }
  /**
   * Transfer a specified use count from entitlement A to B..Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateTransfer_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: EntitlementTransferRequest
  ): Promise<Response<EntitlementTransferResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/transfer'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EntitlementTransferResult,
      'EntitlementTransferResult'
    )
  }
  /**
   * Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: consumed entitlement&lt;/li&gt;&lt;/ul&gt;
   */
  updateDecrement_ByUserId_ByEntitlementId(
    userId: string,
    entitlementId: string,
    data: PublicEntitlementDecrement
  ): Promise<Response<EntitlementDecrementResult>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/public/namespaces/{namespace}/users/{userId}/entitlements/{entitlementId}/decrement'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{entitlementId}', entitlementId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EntitlementDecrementResult,
      'EntitlementDecrementResult'
    )
  }
}
