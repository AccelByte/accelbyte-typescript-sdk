## GET /inventory/v1/public/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicTagsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicTagsApi(sdk)
  .getTags( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<ListTagsResp>
```

## GET /inventory/v1/public/namespaces/{namespace}/itemtypes

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemTypesApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemTypesApi(sdk)
  .getItemtypes( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<ListItemTypesResp>
```

## GET /inventory/v1/public/namespaces/{namespace}/users/me/inventories

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicInventoriesApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicInventoriesApi(sdk)
  .getUsersMeInventories( queryParams?: {
             inventoryConfigurationCode?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    })

// return Promise<ListInventoryResp>
```

## GET /inventory/v1/public/namespaces/{namespace}/inventoryConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicInventoryConfigurationsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicInventoryConfigurationsApi(sdk)
  .getInventoryConfigurations( queryParams?: {
             code?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'code' | 'code:asc' | 'code:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    })

// return Promise<ListInventoryConfigurationsResp>
```

## DELETE /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .deleteItemMeUser_ByInventoryId(inventoryId:string, data: {
             RemoveInventoryItemReq[]
    })

// return Promise<UpdateItemRespArray>
```

## GET /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .getItemsMeUsers_ByInventoryId(inventoryId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             sourceItemId?: string | null,
             tags?: string | null
    })

// return Promise<ListItemResp>
```

## PUT /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .updateItemMeUser_ByInventoryId(inventoryId:string, data: {
             UpdateItemReq[]
    })

// return Promise<UpdateItemRespArray>
```

## POST /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/consume

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .createConsumeUser_ByInventoryId(inventoryId:string, data: {
             ConsumeItemReq
    })

// return Promise<ItemResp>
```

## POST /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/items/movement

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .createItemMovementUser_ByInventoryId(inventoryId:string, data: {
             MoveItemsReq
    })

// return Promise<MoveItemsResp>
```

## GET /inventory/v1/public/namespaces/{namespace}/users/me/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PublicItemsApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PublicItemsApi(sdk)
  .getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(inventoryId:string, slotId:string, sourceItemId:string)

// return Promise<ItemResp>
```

## GET /inventory/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTags( queryParams?: {
             limit?: number,
             offset?: number,
             owner?: string | null,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<ListTagsResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/tags

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTag(data: {
             CreateTagReq
    })

// return Promise<CreateTagResp>
```

## GET /inventory/v1/admin/namespaces/{namespace}/itemtypes

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemTypesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemTypesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getItemtypes( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'
    })

// return Promise<ListItemTypesResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/itemtypes

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemTypesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemTypesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createItemtype(data: {
             CreateItemTypeReq
    })

// return Promise<CreateItemTypeResp>
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventories

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInventories( queryParams?: {
             inventoryConfigurationCode?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'inventoryConfigurationCode' | 'inventoryConfigurationCode:asc' | 'inventoryConfigurationCode:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             userId?: string | null
    })

// return Promise<ListInventoryResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/inventories

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInventory(data: {
             CreateInventoryReq
    })

// return Promise<InventoryResp>
```

## DELETE /inventory/v1/admin/namespaces/{namespace}/tags/{tagName}

```
import { AccelByte } from '@accelbyte/sdk'
import { TagsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

TagsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteTag_ByTagName(tagName:string)

// return Promise
```

## POST /inventory/v1/admin/namespaces/{namespace}/chainingOperations

```
import { AccelByte } from '@accelbyte/sdk'
import { ChainingOperationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ChainingOperationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createChainingOperation(data: {
             ChainingOperationReq
    })

// return Promise<ChainingOperationResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createItem_ByUserId(userId:string, data: {
             SaveItemReq
    })

// return Promise<ItemResp>
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoryConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoryConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInventoryConfigurations( queryParams?: {
             code?: string | null,
             limit?: number,
             offset?: number,
             sortBy?: 'code' | 'code:asc' | 'code:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'
    })

// return Promise<ListInventoryConfigurationsResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoryConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoryConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInventoryConfiguration(data: {
             CreateInventoryConfigurationReq
    })

// return Promise<InventoryConfigurationResp>
```

## DELETE /inventory/v1/admin/namespaces/{namespace}/itemtypes/{itemTypeName}

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemTypesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemTypesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteItemtype_ByItemTypeName(itemTypeName:string)

// return Promise
```

## GET /inventory/v1/admin/namespaces/{namespace}/integrationConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { IntegrationConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

IntegrationConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getIntegrationConfigurations( queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
    })

// return Promise<ListIntegrationConfigurationsResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/integrationConfigurations

```
import { AccelByte } from '@accelbyte/sdk'
import { IntegrationConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

IntegrationConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createIntegrationConfiguration(data: {
             CreateIntegrationConfigurationReq
    })

// return Promise<IntegrationConfigurationResp>
```

## DELETE /inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInventory_ByInventoryId(inventoryId:string, data: {
             DeleteInventoryReq
    })

// return Promise
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInventory_ByInventoryId(inventoryId:string)

// return Promise<InventoryResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateInventory_ByInventoryId(inventoryId:string, data: {
             UpdateInventoryReq
    })

// return Promise<InventoryResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/items/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createItemBulk_ByUserId(userId:string, data: {
             SaveItemReq[]
    })

// return Promise<BulkSaveItemRespArray>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/purchaseable

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePurchaseable_ByUserId(userId:string, data: {
             PurchaseValidationReq
    })

// return Promise
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getItems_ByInventoryId(inventoryId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc',
             sourceItemId?: string | null,
             tags?: string | null
    })

// return Promise<ListItemResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/users/{userId}/items/entitlements/sync

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateItemEntitlementSync_ByUserId(userId:string)

// return Promise
```

## DELETE /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteItem_ByUserId_ByInventoryId(userId:string, inventoryId:string, data: {
             RemoveInventoryItemReq[]
    })

// return Promise<UpdateItemRespArray>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createItem_ByUserId_ByInventoryId(userId:string, inventoryId:string, data: {
             SaveItemToInventoryReq
    })

// return Promise<ItemResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateItem_ByUserId_ByInventoryId(userId:string, inventoryId:string, data: {
             AdminUpdateItemReq[]
    })

// return Promise<UpdateItemRespArray>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/consume

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConsume_ByUserId_ByInventoryId(userId:string, inventoryId:string, data: {
             ConsumeItemReq,
             queryParams?: {
             dateRangeValidation?: string | null
    })

// return Promise<ItemResp>
```

## DELETE /inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoryConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoryConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string)

// return Promise
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoryConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoryConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string)

// return Promise<InventoryConfigurationResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/inventoryConfigurations/{inventoryConfigurationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoryConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoryConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string, data: {
             InventoryConfigurationReq
    })

// return Promise<InventoryConfigurationResp>
```

## POST /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventories/{inventoryId}/items/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createItemBulk_ByUserId_ByInventoryId(userId:string, inventoryId:string, data: {
             SaveItemToInventoryReq[]
    })

// return Promise<BulkSaveItemRespArray>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/integrationConfigurations/{integrationConfigurationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { IntegrationConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

IntegrationConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateIntegrationConfiguration_ByIntegrationConfigurationId(integrationConfigurationId:string, data: {
             UpdateIntegrationConfigurationReq
    })

// return Promise<IntegrationConfigurationResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/integrationConfigurations/{integrationConfigurationId}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { IntegrationConfigurationsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

IntegrationConfigurationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStatus_ByIntegrationConfigurationId(integrationConfigurationId:string, data: {
             UpdateStatusIntegrationConfigurationReq
    })

// return Promise<IntegrationConfigurationResp>
```

## GET /inventory/v1/admin/namespaces/{namespace}/inventories/{inventoryId}/slots/{slotId}/sourceItems/{sourceItemId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ItemsAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ItemsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSourceItem_ByInventoryId_BySlotId_BySourceItemId(inventoryId:string, slotId:string, sourceItemId:string)

// return Promise<ItemResp>
```

## PUT /inventory/v1/admin/namespaces/{namespace}/users/{userId}/inventoryConfigurations/{inventoryConfigurationCode}/inventories

```
import { AccelByte } from '@accelbyte/sdk'
import { InventoriesAdminApi } from '@accelbyte/sdk-inventory'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InventoriesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateInventory_ByUserId_ByInventoryConfigurationCode(userId:string, inventoryConfigurationCode:string, data: {
             UpdateInventoryReq
    })

// return Promise<InventoryRespArray>
```