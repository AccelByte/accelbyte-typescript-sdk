[@accelbyte/sdk](../README.md) / [platform/WalletApi](../modules/platform_WalletApi.md) / WalletApi

# Class: WalletApi

[platform/WalletApi](../modules/platform_WalletApi.md).WalletApi

## Table of contents

### Methods

- [getUserMeWallet](platform_WalletApi.WalletApi.md#getusermewallet)
- [getWalletByUserId](platform_WalletApi.WalletApi.md#getwalletbyuserid)
- [getWalletMap](platform_WalletApi.WalletApi.md#getwalletmap)

## Methods

### getUserMeWallet

▸ **getUserMeWallet**(`currencyCode`): `Promise`<`IResponseWithSync`<{ `balance`: `number` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` ; `userId`: `string` ; `walletInfos`: `undefined` \| ``null`` \| { timeLimitedBalances?: { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] \| null \| undefined; totalPermanentBalance?: number \| ... 1 more ... \| undefined; ... 10 more ...; balanceOrigin: string; }[] ; `walletStatus`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"``  }\>\>

get my wallet by currency code and namespace.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li><li><i>Path's namespace</i> : <ul>   <li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user wallet</b></li>   <li>can be filled with <b>game namespace</b> in order to get <b>game user wallet</b></li>   </ul></li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyCode` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `balance`: `number` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` ; `userId`: `string` ; `walletInfos`: `undefined` \| ``null`` \| { timeLimitedBalances?: { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] \| null \| undefined; totalPermanentBalance?: number \| ... 1 more ... \| undefined; ... 10 more ...; balanceOrigin: string; }[] ; `walletStatus`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"``  }\>\>

#### Defined in

[packages/sdk/src/api/platform/WalletApi.ts:20](https://github.com/AccelByte/accelbyte-web-sdk/blob/a3afe6b/packages/sdk/src/api/platform/WalletApi.ts#L20)

___

### getWalletByUserId

▸ **getWalletByUserId**(`userId`, `currencyCode`): `Promise`<`IResponseWithSync`<{ `balance`: `number` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` ; `userId`: `string` ; `walletInfos`: `undefined` \| ``null`` \| { timeLimitedBalances?: { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] \| null \| undefined; totalPermanentBalance?: number \| ... 1 more ... \| undefined; ... 10 more ...; balanceOrigin: string; }[] ; `walletStatus`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"``  }\>\>

get a wallet by currency code.<br>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:WALLET", action=2 (READ)</li><li><i>Returns</i>: wallet info</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `userId` | `string` |
| `currencyCode` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `balance`: `number` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `undefined` \| ``null`` \| `string` ; `namespace`: `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` ; `userId`: `string` ; `walletInfos`: `undefined` \| ``null`` \| { timeLimitedBalances?: { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] \| null \| undefined; totalPermanentBalance?: number \| ... 1 more ... \| undefined; ... 10 more ...; balanceOrigin: string; }[] ; `walletStatus`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"``  }\>\>

#### Defined in

[packages/sdk/src/api/platform/WalletApi.ts:27](https://github.com/AccelByte/accelbyte-web-sdk/blob/a3afe6b/packages/sdk/src/api/platform/WalletApi.ts#L27)

___

### getWalletMap

▸ **getWalletMap**(`«destructured»`): `Promise`<{ `error`: ``null`` = null; `value`: `Map`<`string`, { `balance`: `number` ; `balanceOrigin`: `string` ; `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `string` ; `namespace`: `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` ; `timeLimitedBalances`: `undefined` \| ``null`` \| { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] ; `totalPermanentBalance`: `undefined` \| ``null`` \| `number` ; `totalTimeLimitedBalance`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string`  }\>  } \| { `error`: `unknown` ; `value`: ``null`` = null }\>

get a map of wallet represented by its currency code

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `currencyCodes` | `string`[] |
| › `userId` | `string` |

#### Returns

`Promise`<{ `error`: ``null`` = null; `value`: `Map`<`string`, { `balance`: `number` ; `balanceOrigin`: `string` ; `createdAt`: `string` ; `currencyCode`: `string` ; `currencySymbol`: `string` ; `id`: `string` ; `namespace`: `string` ; `status`: ``"ACTIVE"`` \| ``"INACTIVE"`` ; `timeLimitedBalances`: `undefined` \| ``null`` \| { expireAt?: string \| null \| undefined; balance?: number \| null \| undefined; balanceSource?: string \| null \| undefined; }[] ; `totalPermanentBalance`: `undefined` \| ``null`` \| `number` ; `totalTimeLimitedBalance`: `undefined` \| ``null`` \| `number` ; `updatedAt`: `string` ; `userId`: `string`  }\>  } \| { `error`: `unknown` ; `value`: ``null`` = null }\>

#### Defined in

[packages/sdk/src/api/platform/WalletApi.ts:34](https://github.com/AccelByte/accelbyte-web-sdk/blob/a3afe6b/packages/sdk/src/api/platform/WalletApi.ts#L34)
