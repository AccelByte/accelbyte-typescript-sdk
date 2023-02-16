/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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

export interface UserLinkedPlatformV3 extends z.TypeOf<typeof UserLinkedPlatformV3> {}
