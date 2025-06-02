/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InventoryConfigurationResp } from './InventoryConfigurationResp.js'
import { Paging } from './Paging.js'

export const ListInventoryConfigurationsResp = z.object({ data: z.array(InventoryConfigurationResp), paging: Paging })

export interface ListInventoryConfigurationsResp extends z.TypeOf<typeof ListInventoryConfigurationsResp> {}
