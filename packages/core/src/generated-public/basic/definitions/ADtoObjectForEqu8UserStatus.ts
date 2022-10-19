/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForEqu8UserStatus = z.object({
  userId: z.string().nullish(),
  actionId: z.number().int().nullish(),
  actionComment: z.string().nullish(),
  when: z.string().nullish(),
  expires: z.string().nullish()
})

export type ADtoObjectForEqu8UserStatus = z.TypeOf<typeof ADtoObjectForEqu8UserStatus>
