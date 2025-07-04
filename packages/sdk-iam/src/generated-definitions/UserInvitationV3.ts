/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole.js'

export const UserInvitationV3 = z.object({
  acceptanceLink: z.string().nullish(),
  additionalData: z.string().nullish(),
  createdAt: z.string(),
  email: z.string(),
  expiredAt: z.string(),
  id: z.string().nullish(),
  isNewStudio: z.boolean().nullish(),
  languageTag: z.string().nullish(),
  namespace: z.string().nullish(),
  namespaceDisplayName: z.string().nullish(),
  roles: z.array(NamespaceRole),
  studioNamespace: z.string().nullish()
})

export interface UserInvitationV3 extends z.TypeOf<typeof UserInvitationV3> {}
