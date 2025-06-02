/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InviteUserRequestV4 = z.object({
  assignedNamespaces: z.array(z.string()),
  emailAddresses: z.array(z.string()),
  isAdmin: z.boolean(),
  isNewStudio: z.boolean().nullish(),
  languageTag: z.string().nullish(),
  namespace: z.string().nullish(),
  roleId: z.string().nullish()
})

export interface InviteUserRequestV4 extends z.TypeOf<typeof InviteUserRequestV4> {}
