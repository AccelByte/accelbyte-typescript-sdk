/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillItemResult } from './FulfillItemResult.js'

export const FulfillmentStateInfo = z.object({
  failedList: z.array(FulfillItemResult).nullish(),
  successList: z.array(FulfillItemResult).nullish()
})

export interface FulfillmentStateInfo extends z.TypeOf<typeof FulfillmentStateInfo> {}
