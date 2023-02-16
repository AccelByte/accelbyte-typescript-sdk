[@accelbyte/sdk](../README.md) / [platform/ItemApi](../modules/platform_ItemApi.md) / ItemApi

# Class: ItemApi

[platform/ItemApi](../modules/platform_ItemApi.md).ItemApi

## Table of contents

### Methods

- [fetchAvailableItemInfoMap](platform_ItemApi.ItemApi.md#fetchavailableiteminfomap)
- [fetchItemsByCriteria](platform_ItemApi.ItemApi.md#fetchitemsbycriteria)
- [getAppInfoByItemId](platform_ItemApi.ItemApi.md#getappinfobyitemid)
- [getItemByAppId](platform_ItemApi.ItemApi.md#getitembyappid)
- [getItemByItemIdDynamic](platform_ItemApi.ItemApi.md#getitembyitemiddynamic)
- [getItemsByItemIdLocale](platform_ItemApi.ItemApi.md#getitemsbyitemidlocale)
- [getItemsByItemIds](platform_ItemApi.ItemApi.md#getitemsbyitemids)
- [validatePurchaseCondition](platform_ItemApi.ItemApi.md#validatepurchasecondition)

## Methods

### fetchAvailableItemInfoMap

▸ **fetchAvailableItemInfoMap**(`«destructured»`): `Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`ItemInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = null; `value`: `Map`<`string`, `ItemInfo`\>  }\>

Fetch the items and convert it into a map of `itemId` and its item info

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams` | `QueryParamsItemIds` |

#### Returns

`Promise`<{ `error`: `IResponseError` ; `onSync`: (`syncedData`: (`_`: `IResponse`<`ItemInfoArray`\>) => `void`) => `void` ; `response`: ``null``  } \| { `error`: ``null`` = null; `value`: `Map`<`string`, `ItemInfo`\>  }\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:55](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L55)

___

### fetchItemsByCriteria

▸ **fetchItemsByCriteria**(`«destructured»`): `Promise`<`IResponseWithSync`<`ItemPagingSlicedResult`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.appType?` | ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` |
| › `queryParams.baseAppId?` | ``null`` \| `string` |
| › `queryParams.categoryPath?` | ``null`` \| `string` |
| › `queryParams.features?` | ``null`` \| `string` |
| › `queryParams.includeSubCategoryItem?` | ``null`` \| `boolean` |
| › `queryParams.itemType?` | ``"APP"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"LOOTBOX"`` \| ``"COINS"`` \| ``"INGAMEITEM"`` \| ``"BUNDLE"`` \| ``"SEASON"`` \| ``"EXTENSION"`` |
| › `queryParams.language?` | ``null`` \| `string` |
| › `queryParams.limit?` | `number` |
| › `queryParams.offset?` | `number` |
| › `queryParams.region?` | ``null`` \| `string` |
| › `queryParams.sortBy?` | ``null`` \| `string` |
| › `queryParams.storeId?` | ``null`` \| `string` |
| › `queryParams.tags?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<`ItemPagingSlicedResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:37](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L37)

___

### getAppInfoByItemId

▸ **getAppInfoByItemId**(`«destructured»`): `Promise`<`IResponseWithSync`<`AppInfo`\>\>

This API is used to get an app in locale. If app not exist in specific region, default region app will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store app)</li><li><i>Returns</i>: app data</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `itemId` | `string` |
| › `queryParams?` | `QueryParams` |

#### Returns

`Promise`<`IResponseWithSync`<`AppInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:82](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L82)

___

### getItemByAppId

▸ **getItemByAppId**(`«destructured»`): `Promise`<`IResponseWithSync`<`ItemInfo`\>\>

This API is used to get item by appId.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the item with that appId</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appId` | `string` |
| › `language?` | `string` |
| › `region?` | `string` |
| › `storeId?` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`ItemInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:26](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L26)

___

### getItemByItemIdDynamic

▸ **getItemByItemIdDynamic**(`itemId`): `Promise`<`IResponseWithSync`<`ItemDynamicDataInfo`\>\>

Get item dynamic data for a published item.<br>Other detail info: <ul><li><i>Returns</i>: item dynamic data</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`ItemDynamicDataInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:33](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L33)

___

### getItemsByItemIdLocale

▸ **getItemsByItemIdLocale**(`«destructured»`): `Promise`<`IResponseWithSync`<`PopulatedItemInfo`\>\>

This API is used to get an item in locale. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: item data</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `itemId` | `string` |
| › `queryParams?` | `Object` |
| › `queryParams.language?` | ``null`` \| `string` |
| › `queryParams.populateBundle?` | ``null`` \| `boolean` |
| › `queryParams.region?` | ``null`` \| `string` |
| › `queryParams.storeId?` | ``null`` \| `string` |

#### Returns

`Promise`<`IResponseWithSync`<`PopulatedItemInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:75](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L75)

___

### getItemsByItemIds

▸ **getItemsByItemIds**(`«destructured»`): `Promise`<`IResponseWithSync`<`ItemInfoArray`\>\>

This API is used to query items by criteria within a store. If item not exist in specific region, default region item will return.<p>Other detail info: <ul><li><i>Optional permission</i>: resource="PREVIEW", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Optional permission</i>: resource="SANDBOX", action=1(CREATE) (user with this permission can view draft store item)</li><li><i>Returns</i>: the list of items</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams` | `QueryParamsItemIds` |

#### Returns

`Promise`<`IResponseWithSync`<`ItemInfoArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:48](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L48)

___

### validatePurchaseCondition

▸ **validatePurchaseCondition**(`data`): `Promise`<`IResponse`<`ItemPurchaseConditionValidateResultArray`\>\>

This API is used to validate user item purchase condition

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ItemPurchaseConditionValidateRequest` |

#### Returns

`Promise`<`IResponse`<`ItemPurchaseConditionValidateResultArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/ItemApi.ts:89](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/ItemApi.ts#L89)
