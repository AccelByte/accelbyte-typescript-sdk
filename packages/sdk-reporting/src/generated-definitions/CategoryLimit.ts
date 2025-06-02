/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CategoryLimit = z.object({ extensionCategory: z.string().nullish(), maxReportPerTicket: z.number().int(), name: z.string() })

export interface CategoryLimit extends z.TypeOf<typeof CategoryLimit> {}
