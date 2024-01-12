/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentScriptInfo } from './FulfillmentScriptInfo.js'

export const FulfillmentScriptInfoArray = z.array(FulfillmentScriptInfo)

export interface FulfillmentScriptInfoArray extends z.TypeOf<typeof FulfillmentScriptInfoArray> {}
