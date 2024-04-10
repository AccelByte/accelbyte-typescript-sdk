/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InventoryResp } from './InventoryResp.js'
import { Paging } from './Paging.js'

export const ListInventoryResp = z.object({ data: z.array(InventoryResp), paging: Paging })

export interface ListInventoryResp extends z.TypeOf<typeof ListInventoryResp> {}
