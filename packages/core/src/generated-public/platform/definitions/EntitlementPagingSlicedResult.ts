/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementInfo } from './EntitlementInfo'
import { Paging } from './Paging'

export const EntitlementPagingSlicedResult = z.object({ data: z.array(EntitlementInfo).nullish(), paging: Paging.nullish() })

export type EntitlementPagingSlicedResult = z.TypeOf<typeof EntitlementPagingSlicedResult>
