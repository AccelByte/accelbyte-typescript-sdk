/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListBaseResponseStr = z.object({ data: z.array(z.string()) })

export interface ListBaseResponseStr extends z.TypeOf<typeof ListBaseResponseStr> {}
