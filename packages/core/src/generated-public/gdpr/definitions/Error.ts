/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Error = z.object({ errorCode: z.number().int(), errorMessage: z.string() })

export type Error = z.TypeOf<typeof Error>
