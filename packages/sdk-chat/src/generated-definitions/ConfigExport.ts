/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigExport = z.object({
  chatRateLimitBurst: z.number().int(),
  chatRateLimitDuration: z.number().int(),
  concurrentUsersLimit: z.number().int(),
  enableClanChat: z.boolean().nullish(),
  enableManualTopicCreation: z.boolean().nullish(),
  enablePmSendPlatformId: z.boolean().nullish(),
  enableProfanityFilter: z.boolean().nullish(),
  filterAppName: z.string().nullish(),
  filterParam: z.string().nullish(),
  filterType: z.string().nullish(),
  generalRateLimitBurst: z.number().int(),
  generalRateLimitDuration: z.number().int(),
  namespace: z.string(),
  shardCapacityLimit: z.number().int().nullish(),
  shardDefaultLimit: z.number().int().nullish(),
  shardHardLimit: z.number().int().nullish(),
  spamChatBurst: z.number().int().nullish(),
  spamChatDuration: z.number().int().nullish(),
  spamMuteDuration: z.number().int().nullish()
})

export interface ConfigExport extends z.TypeOf<typeof ConfigExport> {}
