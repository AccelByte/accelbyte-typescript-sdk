/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InviteUserRequestV3 = z.object({
  emailAddresses: z.array(z.string()),
  isAdmin: z.boolean(),
  languageTag: z.string().nullish(),
  namespace: z.string().nullish(),
  roles: z.array(z.string())
})

export interface InviteUserRequestV3 extends z.TypeOf<typeof InviteUserRequestV3> {}
