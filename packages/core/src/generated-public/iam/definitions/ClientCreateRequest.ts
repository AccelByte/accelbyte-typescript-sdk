/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission'

export const ClientCreateRequest = z.object({
  ClientId: z.string(),
  ClientName: z.string(),
  ClientPermissions: z.array(Permission),
  Namespace: z.string(),
  RedirectUri: z.string(),
  Secret: z.string(),
  TwoFactorEnabled: z.boolean()
})

export type ClientCreateRequest = z.TypeOf<typeof ClientCreateRequest>
