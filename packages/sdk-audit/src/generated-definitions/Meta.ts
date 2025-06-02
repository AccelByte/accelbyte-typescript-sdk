/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Meta = z.object({ exportLogLimit: z.number().int(), totalData: z.number().int() })

export interface Meta extends z.TypeOf<typeof Meta> {}
