/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { KeyGroupInfo } from './KeyGroupInfo'
import { Paging } from './Paging'

export const KeyGroupPagingSlicedResult = z.object({ data: z.array(KeyGroupInfo), paging: Paging.nullish() })

export type KeyGroupPagingSlicedResult = z.TypeOf<typeof KeyGroupPagingSlicedResult>
