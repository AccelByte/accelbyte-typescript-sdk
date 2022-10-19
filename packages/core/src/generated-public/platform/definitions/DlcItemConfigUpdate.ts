/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcItem } from './DlcItem'

export const DlcItemConfigUpdate = z.object({ data: z.array(DlcItem).nullish() })

export type DlcItemConfigUpdate = z.TypeOf<typeof DlcItemConfigUpdate>
