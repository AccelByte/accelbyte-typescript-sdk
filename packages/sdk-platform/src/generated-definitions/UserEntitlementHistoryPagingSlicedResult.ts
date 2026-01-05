/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Paging } from './Paging.js'
import { PublicEntitlementHistoryInfo } from './PublicEntitlementHistoryInfo.js'

export const UserEntitlementHistoryPagingSlicedResult = z.object({ data: z.array(PublicEntitlementHistoryInfo), paging: Paging.nullish() })

export interface UserEntitlementHistoryPagingSlicedResult extends z.TypeOf<typeof UserEntitlementHistoryPagingSlicedResult> {}
