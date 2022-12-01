/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CodeInfo } from './CodeInfo'
import { Paging } from './Paging'

export const CodeInfoPagingSlicedResult = z.object({ data: z.array(CodeInfo), paging: Paging.nullish() })

export type CodeInfoPagingSlicedResult = z.TypeOf<typeof CodeInfoPagingSlicedResult>
