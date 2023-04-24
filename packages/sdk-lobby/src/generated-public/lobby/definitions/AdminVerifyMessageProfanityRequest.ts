/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminVerifyMessageProfanityRequest = z.object({ message: z.string(), profanityLevel: z.string() })

export interface AdminVerifyMessageProfanityRequest extends z.TypeOf<typeof AdminVerifyMessageProfanityRequest> {}
