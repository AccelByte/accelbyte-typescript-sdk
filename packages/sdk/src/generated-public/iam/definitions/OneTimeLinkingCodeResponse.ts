/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OneTimeLinkingCodeResponse = z.object({ exp: z.number().int(), oneTimeLinkCode: z.string(), oneTimeLinkUrl: z.string() })

export interface OneTimeLinkingCodeResponse extends z.TypeOf<typeof OneTimeLinkingCodeResponse> {}
