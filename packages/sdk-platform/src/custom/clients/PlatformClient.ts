/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK } from '@accelbyte/sdk'
import { WalletInfo } from '../../generated-public/platform/definitions/WalletInfo.js'
import { Platform } from '../../generated-public/Platform.js'
import { CurrencyInfo } from '../../generated-public/platform/definitions/CurrencyInfo.js'
import { ItemInfo } from '../../generated-public/platform/definitions/ItemInfo.js'

/**
 */
export class PlatformClient {
  static async getCurrencyMap(sdk: AccelbyteSDK) {
    const currencies = await Platform.CurrencyApi(sdk).getCurrencies()
    const currMap = currencies.reduce((currencyMap: Map<string, CurrencyInfo>, cr) => {
      currencyMap.set(cr.currencyCode, cr)
      return currencyMap
    }, new Map() as Map<string, CurrencyInfo>)
    return currMap
  }

  /**
   * get a map of wallet represented by its currency code. Taken from LegacyWalletApi
   */
  static getWalletMap = async (userId: string, currencyCodes: string[], sdk: AccelbyteSDK) => {
    const wallets = await Promise.all(
      currencyCodes.map(currencyCode =>
        Platform.WalletApi(sdk)
          .getWallet_ByUserId_ByCurrencyCode(userId, currencyCode)
          .then(result => {
            return result as WalletInfo
          })
          .catch(error => {
            throw error
          })
      )
    )

    const result = wallets.reduce((map: Map<string, WalletInfo>, wallet: WalletInfo) => {
      map.set(wallet.currencyCode, wallet)
      return map
    }, new Map() as Map<string, WalletInfo>)

    return result
  }

  /**
   * Fetch all information needed for a user to check the user's availability to purchase the item
   */
  static fetchPrePurchaseInformation = async ({ userId, item, sdk }: { userId?: string | null; item: ItemInfo; sdk: AccelbyteSDK }) => {
    const [currencyMapResult, availableItemInfoResult, itemOwnershipResult, baseAppOwnershipResult, purchaseConditionValidationResult] =
      await Promise.all([
        PlatformClient.getCurrencyMap(sdk),
        Platform.ItemApi(sdk).getDynamic_ByItemId(item.itemId),
        userId && item.itemId
          ? Platform.EntitlementApi(sdk).getEntitlementsOwnershipAny_ByUserId(userId, {
              itemIds: [item.itemId].filter(Boolean) as string[]
            })
          : null,

        userId && item.baseAppId
          ? Platform.EntitlementApi(sdk).getEntitlementsOwnershipAny_ByUserId(userId, {
              appIds: [item.baseAppId].filter(Boolean) as string[]
            })
          : null,

        userId
          ? Platform.ItemApi(sdk).createItemPurchaseConditionValidate({
              itemIds: [item.itemId]
            })
          : null
      ])
    return {
      currencyMapResult,
      availableItemInfoResult,
      itemOwnershipResult,
      baseAppOwnershipResult,
      purchaseConditionValidationResult
    }
  }
}

// /**
//  * Fetch all information needed for a user to check the user's availability to purchase the item
//  *
//  * @internal
//  */
// fetchPrePurchaseInformation = async ({ userId, item }: { userId?: string | null; item: ItemInfo }) => {
//   const currencyApi = new CurrencyApi(this.conf, this.namespace, this.cache)
//   const itemApi = new ItemApi(this.conf, this.namespace, this.cache)
//   const entitlementApi = new EntitlementApi(this.conf, this.namespace, this.cache)
//
//   const [currencyMapResult, availableItemInfoResult, itemOwnershipResult, baseAppOwnershipResult, purchaseConditionValidationResult] =
//       await Promise.all([
//         currencyApi.getCurrencyMap(),
//         itemApi.getItemByItemIdDynamic(item.itemId),
//         userId && item.itemId
//             ? entitlementApi.getEntitlementOwnerShip({
//               userId,
//               queryParams: {
//                 itemIds: [item.itemId].filter(Boolean) as string[]
//               }
//             })
//             : null,
//
//         userId && item.baseAppId
//             ? entitlementApi.getEntitlementOwnerShip({
//               userId,
//               queryParams: {
//                 appIds: [item.baseAppId].filter(Boolean) as string[]
//               }
//             })
//             : null,
//
//         userId
//             ? itemApi.validatePurchaseCondition({
//               itemIds: [item.itemId]
//             })
//             : null
//       ])
//   return {
//     currencyMapResult,
//     availableItemInfoResult,
//     itemOwnershipResult,
//     baseAppOwnershipResult,
//     purchaseConditionValidationResult
//   }
// }
