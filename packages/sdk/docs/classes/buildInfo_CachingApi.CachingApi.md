[@accelbyte/sdk](../README.md) / [buildInfo/CachingApi](../modules/buildInfo_CachingApi.md) / CachingApi

# Class: CachingApi

[buildInfo/CachingApi](../modules/buildInfo_CachingApi.md).CachingApi

## Table of contents

### Methods

- [getDiffCache](buildInfo_CachingApi.CachingApi.md#getdiffcache)

## Methods

### getDiffCache

▸ **getDiffCache**(`sourceBuildId`, `destinationBuildId`): `Promise`<`IResponseWithSync`<{ `baseUrls`: `string`[] ; `diffCaches`: { url: string; filePath: string; diffFile: string; }[] ; `summaryFile`: `string`  }\>\>

This API is used to retrieve detailed diff cache.<br/>The response will contains list of diff cache files along with its download url.<br/><br/>Other detail info: <ul><li><i>Required permission</i>: login user</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceBuildId` | `string` |
| `destinationBuildId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `baseUrls`: `string`[] ; `diffCaches`: { url: string; filePath: string; diffFile: string; }[] ; `summaryFile`: `string`  }\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/CachingApi.ts:19](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/buildInfo/CachingApi.ts#lines-19)
