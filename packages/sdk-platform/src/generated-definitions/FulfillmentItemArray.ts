/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentItem } from './FulfillmentItem.js'

export const FulfillmentItemArray = z.array(FulfillmentItem)

export interface FulfillmentItemArray extends z.TypeOf<typeof FulfillmentItemArray> {}
