/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RegionDataChange } from './RegionDataChange'

export const BulkRegionDataChangeRequest = z.object({ changes: z.array(RegionDataChange).nullish() })

export interface BulkRegionDataChangeRequest extends z.TypeOf<typeof BulkRegionDataChangeRequest> {}
