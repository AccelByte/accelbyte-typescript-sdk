/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClawbackInfo } from './ClawbackInfo.js'
import { Paging } from './Paging.js'

export const IapClawbackPagingSlicedResult = z.object({ data: z.array(ClawbackInfo), paging: Paging.nullish() })

export interface IapClawbackPagingSlicedResult extends z.TypeOf<typeof IapClawbackPagingSlicedResult> {}
