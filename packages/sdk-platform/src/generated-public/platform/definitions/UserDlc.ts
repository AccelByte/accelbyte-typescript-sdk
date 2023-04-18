/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcRecord } from './DlcRecord'

export const UserDlc = z.object({
  rvn: z.number().int().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  id: z.string().nullish(),
  userId: z.string().nullish(),
  namespace: z.string().nullish(),
  platform: z.enum(['PSN', 'STEAM', 'XBOX', 'EPICGAMES']).nullish(),
  dlcs: z.array(DlcRecord).nullish()
})

export interface UserDlc extends z.TypeOf<typeof UserDlc> {}
