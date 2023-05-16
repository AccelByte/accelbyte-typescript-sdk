/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RegionDataItem } from './RegionDataItem.js'

export const RegionDataChange = z.object({
  itemIdentities: z.array(z.string()).nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']),
  regionData: z.record(z.array(RegionDataItem)).nullish()
})

export interface RegionDataChange extends z.TypeOf<typeof RegionDataChange> {}
