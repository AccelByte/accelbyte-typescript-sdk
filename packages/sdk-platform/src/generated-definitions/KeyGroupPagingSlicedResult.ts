/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { KeyGroupInfo } from './KeyGroupInfo.js'
import { Paging } from './Paging.js'

export const KeyGroupPagingSlicedResult = z.object({ data: z.array(KeyGroupInfo), paging: Paging.nullish() })

export interface KeyGroupPagingSlicedResult extends z.TypeOf<typeof KeyGroupPagingSlicedResult> {}
