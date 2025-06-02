/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementInfo } from './EntitlementInfo.js'
import { Paging } from './Paging.js'

export const EntitlementPagingSlicedResult = z.object({ data: z.array(EntitlementInfo).nullish(), paging: Paging.nullish() })

export interface EntitlementPagingSlicedResult extends z.TypeOf<typeof EntitlementPagingSlicedResult> {}
