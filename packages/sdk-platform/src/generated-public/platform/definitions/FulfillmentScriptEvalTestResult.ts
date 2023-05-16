/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentScriptEvalTestResult = z.object({ errorStackTrace: z.string().nullish(), result: z.record(z.any()).nullish() })

export interface FulfillmentScriptEvalTestResult extends z.TypeOf<typeof FulfillmentScriptEvalTestResult> {}
