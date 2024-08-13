/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SessionConfiguration } from './SessionConfiguration.js'
import { User } from './User.js'

export const Party = z.object({
  Attributes: z.record(z.any()).nullish(),
  Code: z.string().nullish(),
  Configuration: SessionConfiguration.nullish(),
  ConfigurationName: z.string().nullish(),
  CreatedAt: z.string().nullish(),
  CreatedBy: z.string().nullish(),
  ExpiredAt: z.string().nullish(),
  ID: z.string().nullish(),
  IsActive: z.boolean().nullish(),
  IsFull: z.boolean().nullish(),
  LeaderID: z.string().nullish(),
  Members: z.array(User).nullish(),
  Namespace: z.string().nullish(),
  UpdatedAt: z.string().nullish(),
  Version: z.number().int().nullish()
})

export interface Party extends z.TypeOf<typeof Party> {}
