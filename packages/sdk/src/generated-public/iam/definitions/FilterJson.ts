/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FilterJson = z.object({ bits: z.array(z.number().int()), k: z.number().int(), m: z.number().int() })

export type FilterJson = z.TypeOf<typeof FilterJson>
