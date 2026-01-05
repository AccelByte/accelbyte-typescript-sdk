/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { SubscriptionActivityInfo } from './SubscriptionActivityInfo.js'

export const SubscriptionActivityPagingSlicedResult = z.object({ data: z.array(SubscriptionActivityInfo), paging: Paging.nullish() })

export interface SubscriptionActivityPagingSlicedResult extends z.TypeOf<typeof SubscriptionActivityPagingSlicedResult> {}
