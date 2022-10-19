/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformUserInformationV3 = z.object({
  displayName: z.string().nullish(),
  emailAddress: z.string().nullish(),
  linkedAt: z.string(),
  namespace: z.string(),
  platformId: z.string(),
  platformUserId: z.string(),
  xboxUserId: z.string().nullish()
})

export type PlatformUserInformationV3 = z.TypeOf<typeof PlatformUserInformationV3>
