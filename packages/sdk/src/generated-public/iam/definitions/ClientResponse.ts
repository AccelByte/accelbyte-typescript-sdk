/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'

export const ClientResponse = z.object({
  ClientId: z.string(),
  ClientName: z.string(),
  ClientPermissions: z.array(Permission),
  CreatedAt: z.string(),
  Namespace: z.string(),
  RedirectUri: z.string(),
  TwoFactorEnabled: z.boolean()
})

export type ClientResponse = z.TypeOf<typeof ClientResponse>
