/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForEqu8UserStatus = z.object({
  actionComment: z.string().nullish(),
  actionId: z.number().int().nullish(),
  expires: z.string().nullish(),
  userId: z.string().nullish(),
  when: z.string().nullish()
})

export interface ADtoObjectForEqu8UserStatus extends z.TypeOf<typeof ADtoObjectForEqu8UserStatus> {}
