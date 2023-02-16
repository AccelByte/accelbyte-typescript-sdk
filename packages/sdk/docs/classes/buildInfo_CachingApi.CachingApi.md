[@accelbyte/sdk](../README.md) / [buildInfo/CachingApi](../modules/buildInfo_CachingApi.md) / CachingApi

# Class: CachingApi

[buildInfo/CachingApi](../modules/buildInfo_CachingApi.md).CachingApi

## Table of contents

### Methods

- [getDiffCache](buildInfo_CachingApi.CachingApi.md#getdiffcache)

## Methods

### getDiffCache

▸ **getDiffCache**(`sourceBuildId`, `destinationBuildId`): `Promise`<`IResponseWithSync`<`RetrieveDiffCacheResponse`\>\>

This API is used to retrieve detailed diff cache.<br/>The response will contains list of diff cache files along with its download url.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceBuildId` | `string` |
| `destinationBuildId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<`RetrieveDiffCacheResponse`\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/CachingApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/96dad9f/packages/sdk/src/api/buildInfo/CachingApi.ts#L19)
