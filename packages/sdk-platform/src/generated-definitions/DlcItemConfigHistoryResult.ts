/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcItemConfigHistoryInfo } from './DlcItemConfigHistoryInfo.js'

export const DlcItemConfigHistoryResult = z.object({ data: z.array(DlcItemConfigHistoryInfo).nullish() })

export interface DlcItemConfigHistoryResult extends z.TypeOf<typeof DlcItemConfigHistoryResult> {}
