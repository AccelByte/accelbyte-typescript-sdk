/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BucketMmrRule = z.object({
  disable_authority: z.boolean(),
  flex_authority_count: z.number().int(),
  flex_flat_step_range: z.number().int(),
  flex_immunity_count: z.number().int(),
  flex_range_max: z.number().int(),
  flex_rate_ms: z.number().int(),
  flex_step_max: z.number().int(),
  force_authority_match: z.boolean(),
  initial_step_range: z.number().int(),
  mmr_max: z.number().int(),
  mmr_mean: z.number().int(),
  mmr_min: z.number().int(),
  mmr_std_dev: z.number().int(),
  override_mmr_data: z.boolean(),
  use_bucket_mmr: z.boolean(),
  use_flat_flex_step: z.boolean()
})

export interface BucketMmrRule extends z.TypeOf<typeof BucketMmrRule> {}
