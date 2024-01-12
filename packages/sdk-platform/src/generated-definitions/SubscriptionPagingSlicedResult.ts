/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { SubscriptionInfo } from './SubscriptionInfo.js'

export const SubscriptionPagingSlicedResult = z.object({ data: z.array(SubscriptionInfo), paging: Paging.nullish() })

export interface SubscriptionPagingSlicedResult extends z.TypeOf<typeof SubscriptionPagingSlicedResult> {}
