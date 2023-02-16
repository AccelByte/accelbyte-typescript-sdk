[@accelbyte/sdk](../README.md) / [buildInfo/DlcApi](../modules/buildInfo_DlcApi.md) / DlcApi

# Class: DlcApi

[buildInfo/DlcApi](../modules/buildInfo_DlcApi.md).DlcApi

## Table of contents

### Methods

- [getBaseGamesByDlcAppId](buildInfo_DlcApi.DlcApi.md#getbasegamesbydlcappid)
- [getLatestDLCByGameAppId](buildInfo_DlcApi.DlcApi.md#getlatestdlcbygameappid)

## Methods

### getBaseGamesByDlcAppId

▸ **getBaseGamesByDlcAppId**(`dlcAppId`): `Promise`<`IResponseWithSync`<`RetrieveBaseGameResponseArray`\>\>

Retrieve the list of DLC available on specific game. Use DLC's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: appId of game and list of its builds by platformId</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dlcAppId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveBaseGameResponseArray`\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/DlcApi.ts:26](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/buildInfo/DlcApi.ts#L26)

___

### getLatestDLCByGameAppId

▸ **getLatestDLCByGameAppId**(`appId`): `Promise`<`IResponseWithSync`<`RetrieveLatestDlcResponseArray`\>\>

Retrieve the list of DLC available on specific game. Use game's appId to query.<p>Other detail info: <ul><li><i>Returns</i>: list of DLC</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveLatestDlcResponseArray`\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/DlcApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/24d660a/packages/sdk/src/api/buildInfo/DlcApi.ts#L19)
