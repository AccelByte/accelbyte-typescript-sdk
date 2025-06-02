/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateEmailSenderApiKeyRequest = z.object({ account: z.string(), apiKey: z.string() })

export interface CreateEmailSenderApiKeyRequest extends z.TypeOf<typeof CreateEmailSenderApiKeyRequest> {}
