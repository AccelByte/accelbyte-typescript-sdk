/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CancelRequest = z.object({ immediate: z.boolean().nullish(), reason: z.string().nullish() })

export type CancelRequest = z.TypeOf<typeof CancelRequest>
