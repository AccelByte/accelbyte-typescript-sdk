/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RecurringChargeResult = z.object({ triggered: z.boolean(), code: z.string().nullish(), detail: z.string().nullish() })

export type RecurringChargeResult = z.TypeOf<typeof RecurringChargeResult>
