/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ContributorResponse = z.object({
  achievementCode: z.string(),
  contributedValue: z.number(),
  createdAt: z.string(),
  id: z.string(),
  namespace: z.string(),
  updatedAt: z.string().nullish(),
  userId: z.string()
})

export interface ContributorResponse extends z.TypeOf<typeof ContributorResponse> {}
