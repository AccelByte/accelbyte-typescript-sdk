/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateItemTypeResp } from './CreateItemTypeResp.js'
import { Paging } from './Paging.js'

export const ListItemTypesResp = z.object({ data: z.array(CreateItemTypeResp), paging: Paging })

export interface ListItemTypesResp extends z.TypeOf<typeof ListItemTypesResp> {}
