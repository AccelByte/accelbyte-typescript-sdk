/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillmentScriptEvalTestResult = z.object({ result: z.record(z.any()).nullish(), errorStackTrace: z.string().nullish() })

export type FulfillmentScriptEvalTestResult = z.TypeOf<typeof FulfillmentScriptEvalTestResult>
