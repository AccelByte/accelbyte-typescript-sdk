/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RegionDataItem } from './RegionDataItem'

export const RegionDataChange = z.object({
  regionData: z.record(z.array(RegionDataItem)).nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']),
  itemIdentities: z.array(z.string()).nullish()
})

export interface RegionDataChange extends z.TypeOf<typeof RegionDataChange> {}
