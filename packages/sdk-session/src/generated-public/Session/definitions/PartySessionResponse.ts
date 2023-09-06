/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicConfiguration } from './PublicConfiguration.js'
import { UserResponse } from './UserResponse.js'

export const PartySessionResponse = z.object({
  attributes: z.record(z.any()).nullish(),
  code: z.string().nullish(),
  configuration: PublicConfiguration,
  createdAt: z.string(),
  createdBy: z.string(),
  expiredAt: z.string().nullish(),
  id: z.string(),
  isActive: z.boolean(),
  isFull: z.boolean(),
  leaderID: z.string(),
  members: z.array(UserResponse),
  namespace: z.string(),
  storage: z.record(z.any()).nullish(),
  updatedAt: z.string(),
  version: z.number().int()
})

export interface PartySessionResponse extends z.TypeOf<typeof PartySessionResponse> {}
