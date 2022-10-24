/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RestapiErrorResponse = z.object({ Code: z.number().int().nullish(), Message: z.string() })

export type RestapiErrorResponse = z.TypeOf<typeof RestapiErrorResponse>
