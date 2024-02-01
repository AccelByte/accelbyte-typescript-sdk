/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FreeFormNotificationRequest = z.object({ message: z.string(), topic: z.string() })

export interface FreeFormNotificationRequest extends z.TypeOf<typeof FreeFormNotificationRequest> {}
