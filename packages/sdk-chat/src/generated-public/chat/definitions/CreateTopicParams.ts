/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTopicParams = z.object({
  admins: z.array(z.string()),
  description: z.string(),
  isChannel: z.boolean(),
  isJoinable: z.boolean(),
  members: z.array(z.string()),
  name: z.string(),
  shardLimit: z.number().int().nullish(),
  type: z.string()
})

export interface CreateTopicParams extends z.TypeOf<typeof CreateTopicParams> {}
