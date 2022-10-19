/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TestResult = z.object({ success: z.boolean(), msg: z.string().nullish() })

export type TestResult = z.TypeOf<typeof TestResult>
