/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserEntitlementHistoryPagingSlicedResult } from './UserEntitlementHistoryPagingSlicedResult.js'

export const UserEntitlementHistoryPagingSlicedResultArray = z.array(UserEntitlementHistoryPagingSlicedResult)

export interface UserEntitlementHistoryPagingSlicedResultArray extends z.TypeOf<typeof UserEntitlementHistoryPagingSlicedResultArray> {}
