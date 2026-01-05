/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EmailSenderApiKeyResponse } from './EmailSenderApiKeyResponse.js'

export const EmailSenderApiKeyResponseArray = z.array(EmailSenderApiKeyResponse)

export interface EmailSenderApiKeyResponseArray extends z.TypeOf<typeof EmailSenderApiKeyResponseArray> {}
