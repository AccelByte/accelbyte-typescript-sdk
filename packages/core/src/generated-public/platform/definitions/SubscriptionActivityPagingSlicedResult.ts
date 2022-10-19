/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { SubscriptionActivityInfo } from './SubscriptionActivityInfo'

export const SubscriptionActivityPagingSlicedResult = z.object({ data: z.array(SubscriptionActivityInfo), paging: Paging.nullish() })

export type SubscriptionActivityPagingSlicedResult = z.TypeOf<typeof SubscriptionActivityPagingSlicedResult>
