/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BackupCodesResponseV4 = z.object({
  generatedAt: z.number().int(),
  invalidCodes: z.array(z.string()).nullish(),
  validCodes: z.array(z.string()).nullish()
})

export type BackupCodesResponseV4 = z.TypeOf<typeof BackupCodesResponseV4>
