/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ExtendConfiguration } from './ExtendConfiguration.js'
import { NativeSessionSetting } from './NativeSessionSetting.js'

export const CreateConfigurationTemplateRequest = z.object({
  NativeSessionSetting: NativeSessionSetting.nullish(),
  PSNBaseUrl: z.string().nullish(),
  appName: z.string().nullish(),
  attributes: z.record(z.any()).nullish(),
  autoJoin: z.boolean().nullish(),
  autoLeaveSession: z.boolean().nullish(),
  clientVersion: z.string(),
  customURLGRPC: z.string().nullish(),
  deployment: z.string(),
  disableCodeGeneration: z.boolean().nullish(),
  disableResendInvite: z.boolean().nullish(),
  dsManualSetReady: z.boolean().nullish(),
  dsSource: z.string().nullish(),
  enableSecret: z.boolean().nullish(),
  fallbackClaimKeys: z.array(z.string()).nullish(),
  grpcSessionConfig: ExtendConfiguration.nullish(),
  immutableStorage: z.boolean().nullish(),
  inactiveTimeout: z.number().int(),
  inviteTimeout: z.number().int(),
  joinability: z.string(),
  leaderElectionGracePeriod: z.number().int().nullish(),
  manualRejoin: z.boolean().nullish(),
  maxActiveSessions: z.number().int().nullish(),
  maxPlayers: z.number().int(),
  minPlayers: z.number().int(),
  name: z.string(),
  persistent: z.boolean(),
  preferredClaimKeys: z.array(z.string()).nullish(),
  requestedRegions: z.array(z.string()),
  textChat: z.boolean(),
  tieTeamsSessionLifetime: z.boolean().nullish(),
  type: z.string()
})

export interface CreateConfigurationTemplateRequest extends z.TypeOf<typeof CreateConfigurationTemplateRequest> {}
