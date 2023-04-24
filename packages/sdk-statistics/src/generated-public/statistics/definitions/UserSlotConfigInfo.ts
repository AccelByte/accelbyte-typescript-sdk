/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserSlotConfigInfo = z.object({
  userId: z.string().nullish(),
  namespace: z.string().nullish(),
  maxSlots: z.number().int().nullish(),
  maxSlotSize: z.number().int().nullish()
})

export interface UserSlotConfigInfo extends z.TypeOf<typeof UserSlotConfigInfo> {}
