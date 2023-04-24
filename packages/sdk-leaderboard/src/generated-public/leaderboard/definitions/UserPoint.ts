/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPoint = z.object({
  additionalData: z.record(z.any()),
  hidden: z.boolean().nullish(),
  point: z.number(),
  userId: z.string()
})

export interface UserPoint extends z.TypeOf<typeof UserPoint> {}
