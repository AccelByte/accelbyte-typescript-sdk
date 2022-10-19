/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AssignedUserV4Response = z.object({
  assignedNamespaces: z.array(z.string()),
  displayName: z.string(),
  email: z.string(),
  roleId: z.string(),
  userId: z.string()
})

export type AssignedUserV4Response = z.TypeOf<typeof AssignedUserV4Response>
