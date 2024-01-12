/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateRegionOverrideRequest = z.object({
  buffer_count: z.number().int(),
  buffer_percent: z.number().int(),
  max_count: z.number().int(),
  min_count: z.number().int(),
  unlimited: z.boolean(),
  use_buffer_percent: z.boolean()
})

export interface CreateRegionOverrideRequest extends z.TypeOf<typeof CreateRegionOverrideRequest> {}
