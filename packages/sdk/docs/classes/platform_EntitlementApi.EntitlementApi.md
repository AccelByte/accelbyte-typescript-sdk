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

▸ **claimEntitlement**(`«destructured»`): `Promise`<`IResponse`<`EntitlementDecrementResult`\>\>

Consume user entitlement. If the entitlement useCount is 0, the status will be CONSUMED. Client should pass item id in options if entitlement clazz is OPTIONBOX<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=4 (UPDATE)</li><li><i>Returns</i>: consumed entitlement</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data` | `EntitlementDecrement` |
| › `entitlementId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponse`<`EntitlementDecrementResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:62](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/EntitlementApi.ts#L62)

___

### getEntitlementByAppId

▸ **getEntitlementByAppId**(`«destructured»`): `Promise`<`IResponseWithSync`<`AppEntitlementInfo`\>\>

Get user app entitlement by appId.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `appId` | `string` |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`AppEntitlementInfo`\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/EntitlementApi.ts#L20)

___

### getEntitlementByItemIds

▸ **getEntitlementByItemIds**(`«destructured»`): `Promise`<`IResponseWithSync`<`EntitlementOwnershipArray`\>\>

Get user entitlement ownership by itemIds.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams?` | `Object` |
| › `queryParams.ids?` | `string`[] |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`EntitlementOwnershipArray`\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:55](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/EntitlementApi.ts#L55)

___

### getEntitlementOwnerShip

▸ **getEntitlementOwnerShip**(`«destructured»`): `Promise`<`IResponseWithSync`<`Ownership`\>\>

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

`Promise`<`IResponseWithSync`<`Ownership`\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:42](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/EntitlementApi.ts#L42)

___

### getEntitlements

▸ **getEntitlements**(`«destructured»`): `Promise`<`IResponseWithSync`<`EntitlementPagingSlicedResult`\>\>

Query user entitlements for a specific user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:ENTITLEMENT", action=2 (READ)</li><li><i>Returns</i>: entitlement list</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `queryParams` | `undefined` \| { `appType?`: ``"GAME"`` \| ``"SOFTWARE"`` \| ``"DLC"`` \| ``"DEMO"`` ; `entitlementClazz?`: ``"APP"`` \| ``"ENTITLEMENT"`` \| ``"CODE"`` \| ``"SUBSCRIPTION"`` \| ``"MEDIA"`` \| ``"OPTIONBOX"`` \| ``"LOOTBOX"`` ; `entitlementName?`: ``null`` \| `string` ; `features?`: `string`[] ; `itemId?`: `string`[] ; `limit?`: `number` ; `offset?`: `number`  } |
| › `userId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`EntitlementPagingSlicedResult`\>\>

#### Defined in

[packages/sdk/src/api/platform/EntitlementApi.ts:29](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/platform/EntitlementApi.ts#L29)
