/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformUserInformationV3 } from './PlatformUserInformationV3.js'

export const UserInformationV3 = z.object({
  country: z.string().nullish(),
  displayName: z.string().nullish(),
  emailAddresses: z.array(z.string()),
  phoneNumber: z.string().nullish(),
  platformUsers: z.array(PlatformUserInformationV3),
  uniqueDisplayName: z.string().nullish(),
  username: z.string().nullish(),
  xboxUserId: z.string().nullish()
})

export interface UserInformationV3 extends z.TypeOf<typeof UserInformationV3> {}
