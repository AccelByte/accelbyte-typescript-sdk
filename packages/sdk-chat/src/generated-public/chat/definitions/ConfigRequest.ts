/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigRequest = z.object({
  chatRateLimitBurst: z.number().int().nullish(),
  chatRateLimitDuration: z.number().int().nullish(),
  concurrentUsersLimit: z.number().int().nullish(),
  enableManualTopicCreation: z.boolean().nullish(),
  enableProfanityFilter: z.boolean().nullish(),
  filterAppName: z.string().nullish(),
  filterParam: z.string().nullish(),
  filterType: z.string().nullish(),
  generalRateLimitBurst: z.number().int().nullish(),
  generalRateLimitDuration: z.number().int().nullish(),
  shardCapacityLimit: z.number().int().nullish(),
  shardDefaultLimit: z.number().int().nullish(),
  shardHardLimit: z.number().int().nullish(),
  spamChatBurst: z.number().int().nullish(),
  spamChatDuration: z.number().int().nullish(),
  spamMuteDuration: z.number().int()
})

export interface ConfigRequest extends z.TypeOf<typeof ConfigRequest> {}
