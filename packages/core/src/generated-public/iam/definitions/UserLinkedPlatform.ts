/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserLinkedPlatform = z.object({
  DisplayName: z.string().nullish(),
  EmailAddress: z.string().nullish(),
  LinkedAt: z.string(),
  Namespace: z.string(),
  OriginNamespace: z.string(),
  PlatformId: z.string().nullish(),
  PlatformUserId: z.string().nullish(),
  UserId: z.string(),
  XUID: z.string().nullish()
})

export type UserLinkedPlatform = z.TypeOf<typeof UserLinkedPlatform>
