/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Config = z.object({
  ChatRateLimitBurst: z.number().int(),
  ChatRateLimitDuration: z.number().int(),
  ConcurrentUsersLimit: z.number().int(),
  EnableManualTopicCreation: z.boolean().nullish(),
  EnableProfanityFilter: z.boolean(),
  FilterAppName: z.string(),
  FilterParam: z.string(),
  FilterType: z.string(),
  GeneralRateLimitBurst: z.number().int(),
  GeneralRateLimitDuration: z.number().int(),
  Namespace: z.string(),
  ShardCapacityLimit: z.number().int(),
  ShardDefaultLimit: z.number().int(),
  ShardHardLimit: z.number().int(),
  SpamChatBurst: z.number().int(),
  SpamChatDuration: z.number().int(),
  SpamMuteDuration: z.number().int(),
  defaultDictionaryLoaded: z.boolean().nullish(),
  enableClanChat: z.boolean().nullish(),
  enablePmSendPlatformId: z.boolean().nullish(),
  maxChatMessageLength: z.number().int().nullish(),
  useDefaultDictionary: z.boolean().nullish()
})

export interface Config extends z.TypeOf<typeof Config> {}
