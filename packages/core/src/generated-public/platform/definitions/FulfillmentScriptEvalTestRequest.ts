/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentScriptContext } from './FulfillmentScriptContext'

export const FulfillmentScriptEvalTestRequest = z.object({
  type: z.enum(['grantDays']),
  context: FulfillmentScriptContext,
  script: z.string()
})

export type FulfillmentScriptEvalTestRequest = z.TypeOf<typeof FulfillmentScriptEvalTestRequest>
