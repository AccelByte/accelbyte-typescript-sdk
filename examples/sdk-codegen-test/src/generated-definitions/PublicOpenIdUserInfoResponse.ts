/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicOpenIdUserInfoResponse = z.object({
  email: z.string(),
  email_verified: z.boolean(),
  name: z.string(),
  picture: z.string(),
  sub: z.string()
})

export interface PublicOpenIdUserInfoResponse extends z.TypeOf<typeof PublicOpenIdUserInfoResponse> {}
