/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformUserInformation = z.object({
  DisplayName: z.string(),
  EmailAddress: z.string().nullish(),
  LinkedAt: z.string(),
  Namespace: z.string(),
  PlatformID: z.string(),
  PlatformUserID: z.string(),
  XUID: z.string().nullish()
})

export type PlatformUserInformation = z.TypeOf<typeof PlatformUserInformation>
