/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Pagination = z.object({ First: z.string(), Last: z.string(), Next: z.string(), Previous: z.string() })

export type Pagination = z.TypeOf<typeof Pagination>
