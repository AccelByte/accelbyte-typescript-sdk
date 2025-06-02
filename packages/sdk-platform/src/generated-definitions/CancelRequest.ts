/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CancelRequest = z.object({ immediate: z.boolean().nullish(), reason: z.string().nullish() })

export interface CancelRequest extends z.TypeOf<typeof CancelRequest> {}
