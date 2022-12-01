/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformUserInformationV3 } from './PlatformUserInformationV3'

export const UserInformationV3 = z.object({
  country: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddresses: z.array(z.string()),
  phoneNumber: z.string().nullish(),
  platformUsers: z.array(PlatformUserInformationV3),
  username: z.string().nullish(),
  xboxUserId: z.string().nullish()
})

export type UserInformationV3 = z.TypeOf<typeof UserInformationV3>
