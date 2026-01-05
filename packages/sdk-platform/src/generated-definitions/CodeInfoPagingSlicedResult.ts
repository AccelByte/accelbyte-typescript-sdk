/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CodeInfo } from './CodeInfo.js'
import { Paging } from './Paging.js'

export const CodeInfoPagingSlicedResult = z.object({ data: z.array(CodeInfo), paging: Paging.nullish() })

export interface CodeInfoPagingSlicedResult extends z.TypeOf<typeof CodeInfoPagingSlicedResult> {}
