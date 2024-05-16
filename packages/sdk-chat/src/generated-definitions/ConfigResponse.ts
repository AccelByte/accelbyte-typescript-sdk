/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigResponse = z.object({
  chatRateLimitBurst: z.number().int().nullish(),
  chatRateLimitDuration: z.number().int().nullish(),
  concurrentUsersLimit: z.number().int().nullish(),
  enableClanChat: z.boolean().nullish(),
  enableManualTopicCreation: z.boolean().nullish(),
  enableProfanityFilter: z.boolean().nullish(),
  filterAppName: z.string().nullish(),
  filterParam: z.string().nullish(),
  filterType: z.string().nullish(),
  generalRateLimitBurst: z.number().int().nullish(),
  generalRateLimitDuration: z.number().int().nullish(),
  maxChatMessageLength: z.number().int().nullish(),
  shardCapacityLimit: z.number().int().nullish(),
  shardDefaultLimit: z.number().int().nullish(),
  shardHardLimit: z.number().int().nullish(),
  spamChatBurst: z.number().int().nullish(),
  spamChatDuration: z.number().int().nullish(),
  spamMuteDuration: z.number().int().nullish()
})

export interface ConfigResponse extends z.TypeOf<typeof ConfigResponse> {}
