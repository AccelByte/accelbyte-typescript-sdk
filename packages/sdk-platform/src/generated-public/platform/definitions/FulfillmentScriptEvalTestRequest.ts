/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentScriptContext } from './FulfillmentScriptContext.js'

export const FulfillmentScriptEvalTestRequest = z.object({
  context: FulfillmentScriptContext,
  script: z.string(),
  type: z.enum(['grantDays'])
})

export interface FulfillmentScriptEvalTestRequest extends z.TypeOf<typeof FulfillmentScriptEvalTestRequest> {}
