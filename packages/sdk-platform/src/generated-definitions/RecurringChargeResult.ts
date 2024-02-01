/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RecurringChargeResult = z.object({ code: z.string().nullish(), detail: z.string().nullish(), triggered: z.boolean() })

export interface RecurringChargeResult extends z.TypeOf<typeof RecurringChargeResult> {}
