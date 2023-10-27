/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NativeSessionSetting } from './NativeSessionSetting.js'

export const PublicConfiguration = z.object({
  PSNBaseURL: z.string().nullish(),
  autoJoin: z.boolean(),
  clientVersion: z.string(),
  deployment: z.string(),
  disableCodeGeneration: z.boolean().nullish(),
  dsManualSetReady: z.boolean().nullish(),
  dsSource: z.string().nullish(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  immutableStorage: z.boolean().nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  maxActiveSession: z.number().int().nullish(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  nativeSessionSetting: NativeSessionSetting.nullish(),
  persistent: z.boolean(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()).nullish(),
  textChat: z.boolean(),
  tieTeamsSessionLifetime: z.boolean().nullish(),
  type: z.string()
})

export interface PublicConfiguration extends z.TypeOf<typeof PublicConfiguration> {}
