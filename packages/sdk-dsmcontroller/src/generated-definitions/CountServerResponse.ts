/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountServerResponse = z.object({ count: z.number().int() })

export interface CountServerResponse extends z.TypeOf<typeof CountServerResponse> {}
