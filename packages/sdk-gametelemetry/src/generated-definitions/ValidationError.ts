/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ValidationError = z.object({ loc: z.array(z.string()), msg: z.string(), type: z.string() })

export interface ValidationError extends z.TypeOf<typeof ValidationError> {}
