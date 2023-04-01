/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RevokeUseCountRequest = z.object({ useCount: z.number().int().nullish(), reason: z.string().nullish() })

export interface RevokeUseCountRequest extends z.TypeOf<typeof RevokeUseCountRequest> {}
