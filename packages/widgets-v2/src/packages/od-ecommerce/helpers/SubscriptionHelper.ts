/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ItemInfo, SubscriptionInfo } from '@accelbyte/sdk-platform'
import { ItemHelper } from './ItemHelper'

const IMAGE_TAG = 'logo'

export class SubscriptionHelper {
  static getItemByItemId(items: ItemInfo[] | null, itemId: string): ItemInfo | null {
    return (items || []).find(item => item.itemId === itemId) || null
  }

  static getSubscriptionByItemId(subscriptions: SubscriptionInfo[] | null, itemId: string): SubscriptionInfo | null {
    return (subscriptions || []).find(subscription => subscription.itemId === itemId) || null
  }

  static getSubscriptionItemBySKU(items: ItemInfo[] | null, sku: string): ItemInfo | null {
    return (items || []).find(item => item.sku === sku) || null
  }

  static hasSubscriptions(entitledSku: Map<string, boolean>, sku: string | string[]): boolean {
    const skus = Array.isArray(sku) ? sku : [sku]
    return !!skus.find(sku => entitledSku.get(sku))
  }

  static getSubscriptionImagesBySKUs(items: ItemInfo[] | null, sku: string[]): string[] {
    if (!items) return []

    const result: string[] = []
    for (const item of items) {
      // Only include items which SKU is included in the `sku` parameter.
      if (!item.sku || !sku.includes(item.sku)) continue

      const url = ItemHelper.getFilteredImageUrlByTag(item.images, IMAGE_TAG)
      if (url) result.push(url)
    }

    return result
  }
}
