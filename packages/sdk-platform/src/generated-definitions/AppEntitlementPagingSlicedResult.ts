/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppEntitlementInfo } from './AppEntitlementInfo.js'
import { Paging } from './Paging.js'

export const AppEntitlementPagingSlicedResult = z.object({ data: z.array(AppEntitlementInfo).nullish(), paging: Paging.nullish() })

export interface AppEntitlementPagingSlicedResult extends z.TypeOf<typeof AppEntitlementPagingSlicedResult> {}
