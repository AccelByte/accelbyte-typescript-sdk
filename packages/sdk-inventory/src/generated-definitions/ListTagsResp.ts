/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateTagResp } from './CreateTagResp.js'
import { Paging } from './Paging.js'

export const ListTagsResp = z.object({ data: z.array(CreateTagResp), paging: Paging })

export interface ListTagsResp extends z.TypeOf<typeof ListTagsResp> {}
