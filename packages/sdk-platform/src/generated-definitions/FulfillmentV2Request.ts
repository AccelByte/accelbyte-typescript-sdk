/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentV2RequestItem } from './FulfillmentV2RequestItem.js'

export const FulfillmentV2Request = z.object({ items: z.array(FulfillmentV2RequestItem).nullish() })

export interface FulfillmentV2Request extends z.TypeOf<typeof FulfillmentV2Request> {}
