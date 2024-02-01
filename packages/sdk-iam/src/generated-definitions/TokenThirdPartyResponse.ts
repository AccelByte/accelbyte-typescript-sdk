/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TokenThirdPartyResponse = z.object({
  platformUserId: z.string().nullish(),
  platform_token: z.string(),
  platform_token_expires_at: z.number().int().nullish(),
  sand_box_id: z.string().nullish()
})

export interface TokenThirdPartyResponse extends z.TypeOf<typeof TokenThirdPartyResponse> {}
