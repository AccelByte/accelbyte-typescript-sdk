/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PaginationV3 = z.object({ first: z.string(), last: z.string(), next: z.string(), previous: z.string() })

export type PaginationV3 = z.TypeOf<typeof PaginationV3>
