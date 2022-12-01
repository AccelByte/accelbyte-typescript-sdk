/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserLinkedPlatformV3 = z.object({
  accountGroup: z.string(),
  displayName: z.string().nullish(),
  emailAddress: z.string().nullish(),
  linkedAt: z.string(),
  namespace: z.string(),
  originNamespace: z.string(),
  platformId: z.string().nullish(),
  platformUserId: z.string().nullish(),
  userId: z.string()
})

export type UserLinkedPlatformV3 = z.TypeOf<typeof UserLinkedPlatformV3>
