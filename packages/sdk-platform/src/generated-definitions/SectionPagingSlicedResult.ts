/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FullSectionInfo } from './FullSectionInfo.js'
import { Paging } from './Paging.js'

export const SectionPagingSlicedResult = z.object({ data: z.array(FullSectionInfo), paging: Paging.nullish() })

export interface SectionPagingSlicedResult extends z.TypeOf<typeof SectionPagingSlicedResult> {}
