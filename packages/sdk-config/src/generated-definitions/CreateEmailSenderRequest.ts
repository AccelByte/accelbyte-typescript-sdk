/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateEmailSenderRequest = z.object({ fromAddress: z.string(), fromName: z.string() })

export interface CreateEmailSenderRequest extends z.TypeOf<typeof CreateEmailSenderRequest> {}
