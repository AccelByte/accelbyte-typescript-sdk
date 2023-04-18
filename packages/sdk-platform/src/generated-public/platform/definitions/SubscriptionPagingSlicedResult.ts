/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging'
import { SubscriptionInfo } from './SubscriptionInfo'

export const SubscriptionPagingSlicedResult = z.object({ data: z.array(SubscriptionInfo), paging: Paging.nullish() })

export interface SubscriptionPagingSlicedResult extends z.TypeOf<typeof SubscriptionPagingSlicedResult> {}
