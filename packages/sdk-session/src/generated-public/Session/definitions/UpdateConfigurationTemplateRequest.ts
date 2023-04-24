/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSessionSetting } from './NativeSessionSetting'

export const UpdateConfigurationTemplateRequest = z.object({
  NativeSessionSetting,
  clientVersion: z.string(),
  deployment: z.string(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  persistent: z.boolean(),
  requestedRegions: z.array(z.string()),
  textChat: z.boolean(),
  type: z.string()
})

export interface UpdateConfigurationTemplateRequest extends z.TypeOf<typeof UpdateConfigurationTemplateRequest> {}
