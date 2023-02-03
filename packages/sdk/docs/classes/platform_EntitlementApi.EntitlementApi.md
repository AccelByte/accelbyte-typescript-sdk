[@accelbyte/sdk](../README.md) / [platform/EntitlementApi](../modules/platform_EntitlementApi.md) / EntitlementApi

# Class: EntitlementApi

[platform/EntitlementApi](../modules/platform_EntitlementApi.md).EntitlementApi

## Table of contents

### Methods

- [claimEntitlement](platform_EntitlementApi.EntitlementApi.md#claimentitlement)
- [getEntitlementByAppId](platform_EntitlementApi.EntitlementApi.md#getentitlementbyappid)
- [getEntitlementByItemIds](platform_EntitlementApi.EntitlementApi.md#getentitlementbyitemids)
- [getEntitlementOwnerShip](platform_EntitlementApi.EntitlementApi.md#getentitlementownership)
- [getEntitlements](platform_EntitlementApi.EntitlementApi.md#getentitlements)

## Methods

### claimEntitlement

▸ **claimEntitlement**(`«destructured»`): `Promise`<`IResponse`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appType`: `undefined` \| ``null`` \| ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `clazz`: ``"APP"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"LOOTBOX"`` \| ``"ENTITLEMENT"`` ; `createdAt`: `string` ; `endDate`: `undefined` \| ``null`` \| `string` ; `features`: `undefined` \| ``null`` \| `string`[] ; `grantedAt`: `string` ; `grantedCode`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `itemId`: `string` ; `itemNamespace`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `name`: `string` ; `namespace`: `string` ; `replayed`: `undefined` \| ``null`` \| `boolean` ; `requestId`: `undefined` \| ``null`` \| `string` ; `rewards`: `undefined` \| ``null`` \| { itemId?: string \| null \| undefined; itemSku?: string \| null \| undefined; count?: number \| null \| undefined; }[] ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: ``"REWARD"`` \| ``"PURCHASE"`` \| ``"IAP"`` \| ``"PROMOTION"`` \| ``"ACHIEVEMENT"`` \| ``"REFERRAL_BONUS"`` \| ``"REDEEM_CODE"`` \| ``"GIFT"`` \| ``"OTHER"`` ; `stackable`: `undefined` \| ``null`` \| `boolean` ; `startDate`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"CONSUMED"`` \| ``"REVOKED"`` ; `storeId`: `undefined` \| ``null`` \| `string` ; `type`: ``"DURABLE"`` \| ``"CONSUMABLE"`` ; `updatedAt`: `string` ; `useCount`: `undefined` \| ``null`` \| `number` ; `userId`: `string`  }\>\>

Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `Object` |
| › `data.options` | `undefined` \| ``null`` \| `string`[] |
| › `data.requestId` | `undefined` \| ``null`` \| `string` |
| › `data.useCount` | `undefined` \| ``null`` \| `number` |
| › `entitlementId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appType`: `undefined` \| ``null`` \| ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `clazz`: ``"APP"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"LOOTBOX"`` \| ``"ENTITLEMENT"`` ; `createdAt`: `string` ; `endDate`: `undefined` \| ``null`` \| `string` ; `features`: `undefined` \| ``null`` \| `string`[] ; `grantedAt`: `string` ; `grantedCode`: `undefined` \| ``null`` \| `string` ; `id`: `string` ; `itemId`: `string` ; `itemNamespace`: `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `name`: `string` ; `namespace`: `string` ; `replayed`: `undefined` \| ``null`` \| `boolean` ; `requestId`: `undefined` \| ``null`` \| `string` ; `rewards`: `undefined` \| ``null`` \| { itemId?: string \| null \| undefined; itemSku?: string \| null \| undefined; count?: number \| null \| undefined; }[] ; `sku`: `undefined` \| ``null`` \| `string` ; `source`: ``"REWARD"`` \| ``"PURCHASE"`` \| ``"IAP"`` \| ``"PROMOTION"`` \| ``"ACHIEVEMENT"`` \| ``"REFERRAL_BONUS"`` \| ``"REDEEM_CODE"`` \| ``"GIFT"`` \| ``"OTHER"`` ; `stackable`: `undefined` \| ``null`` \| `boolean` ; `startDate`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"CONSUMED"`` \| ``"REVOKED"`` ; `storeId`: `undefined` \| ``null`` \| `string` ; `type`: ``"DURABLE"`` \| ``"CONSUMABLE"`` ; `updatedAt`: `string` ; `useCount`: `undefined` \| ``null`` \| `number` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:56](https://github.com/AccelByte/accelbyte-web-sdk/blob/10c884a/packages/sdk/src/api/platform/EntitlementApi.ts#L56)

___

### getEntitlementByAppId

▸ **getEntitlementByAppId**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appType`: `undefined` \| ``null`` \| ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `endDate`: `undefined` \| ``null`` \| `string` ; `grantedAt`: `string` ; `itemId`: `undefined` \| ``null`` \| `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `namespace`: `string` ; `sku`: `undefined` \| ``null`` \| `string` ; `startDate`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"CONSUMED"`` \| ``"REVOKED"`` ; `storeId`: `undefined` \| ``null`` \| `string` ; `userId`: `string`  }\>\>

Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appType`: `undefined` \| ``null`` \| ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `endDate`: `undefined` \| ``null`` \| `string` ; `grantedAt`: `string` ; `itemId`: `undefined` \| ``null`` \| `string` ; `itemSnapshot`: `undefined` \| ``null`` \| { createdAt?: string \| null \| undefined; updatedAt?: string \| null \| undefined; appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; ... 29 more ...; region: string; } ; `namespace`: `string` ; `sku`: `undefined` \| ``null`` \| `string` ; `startDate`: `undefined` \| ``null`` \| `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"CONSUMED"`` \| ``"REVOKED"`` ; `storeId`: `undefined` \| ``null`` \| `string` ; `userId`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/10c884a/packages/sdk/src/api/platform/EntitlementApi.ts#L20)

___

### getEntitlementByItemIds

▸ **getEntitlementByItemIds**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `itemId`: `undefined` \| ``null`` \| `string` ; `owned`: `boolean`  }[]\>\>

Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.ids?` | `string`[] |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `itemId`: `undefined` \| ``null`` \| `string` ; `owned`: `boolean`  }[]\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:49](https://github.com/AccelByte/accelbyte-web-sdk/blob/10c884a/packages/sdk/src/api/platform/EntitlementApi.ts#L49)

___

### getEntitlementOwnerShip

▸ **getEntitlementOwnerShip**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `owned`: `boolean`  }\>\>

Exists any user active entitlement of specified itemIds, skus and appIds<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams` | `Object` |
| › `queryParams.appIds?` | `string`[] |
| › `queryParams.itemIds?` | `string`[] |
| › `queryParams.skus?` | `string`[] |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `owned`: `boolean`  }\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:36](https://github.com/AccelByte/accelbyte-web-sdk/blob/10c884a/packages/sdk/src/api/platform/EntitlementApi.ts#L36)

___

### getEntitlements

▸ **getEntitlements**(`«destructured»`): `Promise`<`IResponseWithSync`<{ `data`: `undefined` \| ``null`` \| { appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; endDate?: string \| null \| undefined; sku?: string \| null \| undefined; storeId?: string \| ... 1 more ... \| undefined; ... 18 more ...; itemNamespace: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams` | `undefined` \| { `appType?`: ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `entitlementClazz?`: ``"APP"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"LOOTBOX"`` \| ``"ENTITLEMENT"`` ; `entitlementName?`: ``null`` \| `string` ; `features?`: `string`[] ; `itemId?`: `string`[] ; `limit?`: `number` ; `offset?`: `number`  } |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `data`: `undefined` \| ``null`` \| { appId?: string \| null \| undefined; appType?: "GAME" \| "SOFTWARE" \| "DLC" \| "DEMO" \| null \| undefined; endDate?: string \| null \| undefined; sku?: string \| null \| undefined; storeId?: string \| ... 1 more ... \| undefined; ... 18 more ...; itemNamespace: string; }[] ; `paging`: `undefined` \| ``null`` \| { next?: string \| null \| undefined; previous?: string \| null \| undefined; }  }\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:29](https://github.com/AccelByte/accelbyte-web-sdk/blob/10c884a/packages/sdk/src/api/platform/EntitlementApi.ts#L29)
