/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OneTimeLinkingCodeResponse = z.object({ exp: z.number().int(), oneTimeLinkCode: z.string(), oneTimeLinkUrl: z.string() })

export type OneTimeLinkingCodeResponse = z.TypeOf<typeof OneTimeLinkingCodeResponse>
