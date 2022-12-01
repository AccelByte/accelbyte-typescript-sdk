[@accelbyte/sdk](../README.md) / [buildInfo/DownloaderApi](../modules/buildInfo_DownloaderApi.md) / DownloaderApi

# Class: DownloaderApi

[buildInfo/DownloaderApi](../modules/buildInfo_DownloaderApi.md).DownloaderApi

## Table of contents

### Methods

- [getAvailableBuilds](buildInfo_DownloaderApi.DownloaderApi.md#getavailablebuilds)
- [getBuildManifest](buildInfo_DownloaderApi.DownloaderApi.md#getbuildmanifest)
- [getDiffCache](buildInfo_DownloaderApi.DownloaderApi.md#getdiffcache)
- [getMatchPlatform](buildInfo_DownloaderApi.DownloaderApi.md#getmatchplatform)

## Methods

### getAvailableBuilds

▸ **getAvailableBuilds**(`appId`): `Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appSize`: `undefined` \| ``null`` \| `number` ; `buildId`: `undefined` \| ``null`` \| `string` ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string`  }[]\>\>

This API is used to get simple build manifest that contains list of current build in various platform.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appSize`: `undefined` \| ``null`` \| `number` ; `buildId`: `undefined` \| ``null`` \| `string` ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/DownloaderApi.ts:27](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/buildInfo/DownloaderApi.ts#lines-27)

___

### getBuildManifest

▸ **getBuildManifest**(`appId`, `platformId`): `Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appSize`: `undefined` \| ``null`` \| `number` ; `appType`: `undefined` \| ``null`` \| `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `buildId`: `undefined` \| ``null`` \| `string` ; `buildInfoVersion`: `undefined` \| ``null`` \| `string` ; `defaultLaunchProfile`: `undefined` \| ``null`` \| { defaultEntryPoint?: string \| null \| undefined; defaultClientId?: string \| null \| undefined; defaultRedirectURI?: string \| null \| undefined; } ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `files`: `undefined` \| ``null`` \| { path?: string \| null \| undefined; filesize?: number \| null \| undefined; uuid?: string \| null \| undefined; checksum?: string \| null \| undefined; blocks?: { uuid?: string \| null \| undefined; checksum?: string \| ... 1 more ... \| undefined; blockSize?: number \| ... 1 more ... \| undefined; offset?: number \| ... 1 more ...[] ; `gameAppId`: `undefined` \| ``null`` \| `string` ; `launchArguments`: `undefined` \| ``null`` \| `string` ; `obsoleteFiles`: `undefined` \| ``null`` \| { path?: string \| null \| undefined; }[] ; `platformId`: `undefined` \| ``null`` \| `string` ; `releaseNoteUrls`: `undefined` \| ``null`` \| `string`[]  }\>\>

This API is used to get build manifest of release version of the application.<p>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Returns</i>: build manifest</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `platformId` | `string` |

#### Returns

`Promise`<`IResponseWithSync`<{ `appId`: `undefined` \| ``null`` \| `string` ; `appSize`: `undefined` \| ``null`` \| `number` ; `appType`: `undefined` \| ``null`` \| `string` ; `baseUrls`: `undefined` \| ``null`` \| `string`[] ; `buildId`: `undefined` \| ``null`` \| `string` ; `buildInfoVersion`: `undefined` \| ``null`` \| `string` ; `defaultLaunchProfile`: `undefined` \| ``null`` \| { defaultEntryPoint?: string \| null \| undefined; defaultClientId?: string \| null \| undefined; defaultRedirectURI?: string \| null \| undefined; } ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `files`: `undefined` \| ``null`` \| { path?: string \| null \| undefined; filesize?: number \| null \| undefined; uuid?: string \| null \| undefined; checksum?: string \| null \| undefined; blocks?: { uuid?: string \| null \| undefined; checksum?: string \| ... 1 more ... \| undefined; blockSize?: number \| ... 1 more ... \| undefined; offset?: number \| ... 1 more ...[] ; `gameAppId`: `undefined` \| ``null`` \| `string` ; `launchArguments`: `undefined` \| ``null`` \| `string` ; `obsoleteFiles`: `undefined` \| ``null`` \| { path?: string \| null \| undefined; }[] ; `platformId`: `undefined` \| ``null`` \| `string` ; `releaseNoteUrls`: `undefined` \| ``null`` \| `string`[]  }\>\>

#### Defined in

[packages/sdk/src/api/buildInfo/DownloaderApi.ts:34](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/buildInfo/DownloaderApi.ts#lines-34)

___

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

[packages/sdk/src/api/buildInfo/DownloaderApi.ts:42](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/buildInfo/DownloaderApi.ts#lines-42)

___

### getMatchPlatform

▸ **getMatchPlatform**(`__namedParameters`): ``null`` \| `string`

Check which platform is available for the user to download the game

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.buildsAvailability` | { `appId`: `undefined` \| ``null`` \| `string` ; `appSize`: `undefined` \| ``null`` \| `number` ; `buildId`: `undefined` \| ``null`` \| `string` ; `displayVersion`: `undefined` \| ``null`` \| `string` ; `platformId`: `undefined` \| ``null`` \| `string`  }[] |
| `__namedParameters.userPlatform` | [`IUserPlatform`](../interfaces/buildInfo_DownloaderApi.IUserPlatform.md) |

#### Returns

``null`` \| `string`

#### Defined in

[packages/sdk/src/api/buildInfo/DownloaderApi.ts:52](https://bitbucket.org/accelbyte/justice-odin/src/d39c8cbe8/accelbyte-web-sdk/packages/sdk/src/api/buildInfo/DownloaderApi.ts#lines-52)
