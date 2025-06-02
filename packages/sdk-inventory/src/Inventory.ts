/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ChainingOperationsAdminApi } from './generated-admin/ChainingOperationsAdminApi.js'
import { IntegrationConfigurationsAdminApi } from './generated-admin/IntegrationConfigurationsAdminApi.js'
import { InventoriesAdminApi } from './generated-admin/InventoriesAdminApi.js'
import { InventoryConfigurationsAdminApi } from './generated-admin/InventoryConfigurationsAdminApi.js'
import { ItemsAdminApi } from './generated-admin/ItemsAdminApi.js'
import { ItemTypesAdminApi } from './generated-admin/ItemTypesAdminApi.js'
import { TagsAdminApi } from './generated-admin/TagsAdminApi.js'
import { PublicInventoriesApi } from './generated-public/PublicInventoriesApi.js'
import { PublicInventoryConfigurationsApi } from './generated-public/PublicInventoryConfigurationsApi.js'
import { PublicItemsApi } from './generated-public/PublicItemsApi.js'
import { PublicItemTypesApi } from './generated-public/PublicItemTypesApi.js'
import { PublicTagsApi } from './generated-public/PublicTagsApi.js'

console.log(`${name}@${version}`)

const apis = {
  TagsAdminApi,
  ItemTypesAdminApi,
  InventoriesAdminApi,
  ChainingOperationsAdminApi,
  ItemsAdminApi,
  InventoryConfigurationsAdminApi,
  IntegrationConfigurationsAdminApi,
  PublicTagsApi,
  PublicItemTypesApi,
  PublicInventoriesApi,
  PublicInventoryConfigurationsApi,
  PublicItemsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Inventory = apis
