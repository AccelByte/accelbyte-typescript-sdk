/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole'

export const UserInvitationV3 = z.object({
  email: z.string(),
  expiredAt: z.string(),
  id: z.string().nullish(),
  namespace: z.string(),
  roles: z.array(NamespaceRole)
})

export interface UserInvitationV3 extends z.TypeOf<typeof UserInvitationV3> {}
