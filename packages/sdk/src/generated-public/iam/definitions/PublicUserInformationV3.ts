/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicUserInformationV3 = z.object({
  createdAt: z.string(),
  displayName: z.string(),
  namespace: z.string(),
  userId: z.string(),
  userName: z.string()
})

export type PublicUserInformationV3 = z.TypeOf<typeof PublicUserInformationV3>
