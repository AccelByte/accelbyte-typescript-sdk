/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserSlotConfigInfo = z.object({
  maxSlotSize: z.number().int().nullish(),
  maxSlots: z.number().int().nullish(),
  namespace: z.string().nullish(),
  userId: z.string().nullish()
})

export interface UserSlotConfigInfo extends z.TypeOf<typeof UserSlotConfigInfo> {}
