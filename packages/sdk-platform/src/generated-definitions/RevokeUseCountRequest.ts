/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeUseCountRequest = z.object({ reason: z.string().nullish(), useCount: z.number().int().nullish() })

export interface RevokeUseCountRequest extends z.TypeOf<typeof RevokeUseCountRequest> {}
