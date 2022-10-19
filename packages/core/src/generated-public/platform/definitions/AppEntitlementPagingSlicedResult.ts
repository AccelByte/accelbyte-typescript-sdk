/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AppEntitlementInfo } from './AppEntitlementInfo'
import { Paging } from './Paging'

export const AppEntitlementPagingSlicedResult = z.object({ data: z.array(AppEntitlementInfo).nullish(), paging: Paging.nullish() })

export type AppEntitlementPagingSlicedResult = z.TypeOf<typeof AppEntitlementPagingSlicedResult>
