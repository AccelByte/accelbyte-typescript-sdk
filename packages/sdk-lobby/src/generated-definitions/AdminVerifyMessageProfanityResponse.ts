/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminVerifyMessageProfanityResponse = z.object({ filteredMessage: z.string(), hasProfanity: z.boolean() })

export interface AdminVerifyMessageProfanityResponse extends z.TypeOf<typeof AdminVerifyMessageProfanityResponse> {}
