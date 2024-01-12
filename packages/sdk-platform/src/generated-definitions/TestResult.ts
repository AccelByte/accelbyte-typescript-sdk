/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TestResult = z.object({ msg: z.string().nullish(), success: z.boolean() })

export interface TestResult extends z.TypeOf<typeof TestResult> {}
