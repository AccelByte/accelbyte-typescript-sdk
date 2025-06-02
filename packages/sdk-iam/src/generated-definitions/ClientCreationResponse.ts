/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Permission } from './Permission.js'

export const ClientCreationResponse = z.object({
  ClientId: z.string(),
  ClientName: z.string(),
  ClientPermissions: z.array(Permission),
  Namespace: z.string(),
  RedirectUri: z.string(),
  TwoFactorEnabled: z.boolean()
})

export interface ClientCreationResponse extends z.TypeOf<typeof ClientCreationResponse> {}
