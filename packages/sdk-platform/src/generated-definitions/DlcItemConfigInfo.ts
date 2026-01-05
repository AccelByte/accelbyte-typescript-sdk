/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcItem } from './DlcItem.js'

export const DlcItemConfigInfo = z.object({ data: z.array(DlcItem).nullish() })

export interface DlcItemConfigInfo extends z.TypeOf<typeof DlcItemConfigInfo> {}
