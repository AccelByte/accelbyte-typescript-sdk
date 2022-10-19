/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole'

export const UserInvitationV3 = z.object({
  email: z.string(),
  expiredAt: z.string(),
  id: z.string().nullish(),
  roles: z.array(NamespaceRole)
})

export type UserInvitationV3 = z.TypeOf<typeof UserInvitationV3>
