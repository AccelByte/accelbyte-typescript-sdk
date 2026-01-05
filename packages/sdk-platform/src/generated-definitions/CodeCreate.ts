/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CodeCreate = z.object({
  batchName: z.string().nullish(),
  codeValue: z.string().nullish(),
  quantity: z.number().int().nullish()
})

export interface CodeCreate extends z.TypeOf<typeof CodeCreate> {}
