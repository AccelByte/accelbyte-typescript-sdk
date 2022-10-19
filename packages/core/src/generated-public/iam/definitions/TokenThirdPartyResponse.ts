/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TokenThirdPartyResponse = z.object({ platform_token: z.string(), sand_box_id: z.string().nullish() })

export type TokenThirdPartyResponse = z.TypeOf<typeof TokenThirdPartyResponse>
