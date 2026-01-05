/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EnabledFactorsResponseV4 = z.object({
  default: z.string(),
  enabled: z.array(z.string()),
  remainingBackupCodeCount: z.number().int().nullish()
})

export interface EnabledFactorsResponseV4 extends z.TypeOf<typeof EnabledFactorsResponseV4> {}
