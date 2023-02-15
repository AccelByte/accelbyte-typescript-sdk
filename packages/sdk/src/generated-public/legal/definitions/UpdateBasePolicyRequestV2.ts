/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateBasePolicyRequestV2 = z.object({
  basePolicyName: z.string().nullish(),
  description: z.string().nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  affectedClientIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish()
})

export type UpdateBasePolicyRequestV2 = z.TypeOf<typeof UpdateBasePolicyRequestV2>