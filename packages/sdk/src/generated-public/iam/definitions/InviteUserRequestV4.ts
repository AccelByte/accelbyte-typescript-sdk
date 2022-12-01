/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const InviteUserRequestV4 = z.object({
  assignedNamespaces: z.array(z.string()),
  emailAddresses: z.array(z.string()),
  isAdmin: z.boolean(),
  roleId: z.string()
})

export type InviteUserRequestV4 = z.TypeOf<typeof InviteUserRequestV4>
