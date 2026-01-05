/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemResp } from './ItemResp.js'
import { Paging } from './Paging.js'

export const ListItemResp = z.object({ data: z.array(ItemResp), paging: Paging })

export interface ListItemResp extends z.TypeOf<typeof ListItemResp> {}
