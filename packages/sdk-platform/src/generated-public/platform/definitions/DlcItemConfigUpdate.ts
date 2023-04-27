/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DlcItem } from './DlcItem.js'

export const DlcItemConfigUpdate = z.object({ data: z.array(DlcItem).nullish() })

export interface DlcItemConfigUpdate extends z.TypeOf<typeof DlcItemConfigUpdate> {}
