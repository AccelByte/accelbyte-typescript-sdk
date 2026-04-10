/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InternalConfigResponseV3 = z.object({
  searchQueryMaxLength: z.number().int(),
  searchQueryMaxLengthForEmail: z.number().int(),
  searchQueryMinLength: z.number().int()
})

export interface InternalConfigResponseV3 extends z.TypeOf<typeof InternalConfigResponseV3> {}
