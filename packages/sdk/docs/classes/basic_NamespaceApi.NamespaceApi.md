[@accelbyte/sdk](../README.md) / [basic/NamespaceApi](../modules/basic_NamespaceApi.md) / NamespaceApi

# Class: NamespaceApi

[basic/NamespaceApi](../modules/basic_NamespaceApi.md).NamespaceApi

## Table of contents

### Methods

- [getNamespaces](basic_NamespaceApi.NamespaceApi.md#getnamespaces)

## Methods

### getNamespaces

▸ **getNamespaces**(`activeOnly?`): `Promise`<`IResponseWithSync`<{ `createdAt`: `undefined` \| ``null`` \| `string` ; `displayName`: `undefined` \| ``null`` \| `string` ; `namespace`: `undefined` \| ``null`` \| `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"DELETED"`` ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

Get all namespaces.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Action code</i>: 11303</li><li><i>Returns</i>: list of namespaces</li></ul>

#### Parameters

| Name | Type |
| :------ | :------ |
| `activeOnly?` | ``null`` \| `boolean` |

#### Returns

`Promise`<`IResponseWithSync`<{ `createdAt`: `undefined` \| ``null`` \| `string` ; `displayName`: `undefined` \| ``null`` \| `string` ; `namespace`: `undefined` \| ``null`` \| `string` ; `status`: `undefined` \| ``null`` \| ``"ACTIVE"`` \| ``"INACTIVE"`` \| ``"DELETED"`` ; `updatedAt`: `undefined` \| ``null`` \| `string`  }[]\>\>

#### Defined in

[packages/sdk/src/api/basic/NamespaceApi.ts:19](https://github.com/AccelByte/accelbyte-web-sdk/blob/9d4cc94/packages/sdk/src/api/basic/NamespaceApi.ts#L19)
