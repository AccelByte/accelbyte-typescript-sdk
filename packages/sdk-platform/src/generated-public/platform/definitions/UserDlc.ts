/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcRecord } from './DlcRecord.js'

export const UserDlc = z.object({
  createdAt: z.string().nullish(),
  dlcs: z.array(DlcRecord).nullish(),
  id: z.string().nullish(),
  namespace: z.string().nullish(),
  platform: z.enum(['EPICGAMES', 'OCULUS', 'PSN', 'STEAM', 'XBOX']).nullish(),
  rvn: z.number().int().nullish(),
  updatedAt: z.string().nullish(),
  userId: z.string().nullish()
})

export interface UserDlc extends z.TypeOf<typeof UserDlc> {}
