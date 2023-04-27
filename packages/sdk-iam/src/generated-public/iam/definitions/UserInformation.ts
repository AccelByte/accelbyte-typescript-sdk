/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformUserInformation } from './PlatformUserInformation.js'

export const UserInformation = z.object({
  Country: z.string(),
  DisplayName: z.string(),
  EmailAddresses: z.array(z.string()),
  LinkedPlatformAccounts: z.array(PlatformUserInformation),
  PhoneNumber: z.string(),
  Username: z.string(),
  XUID: z.string().nullish()
})

export interface UserInformation extends z.TypeOf<typeof UserInformation> {}
