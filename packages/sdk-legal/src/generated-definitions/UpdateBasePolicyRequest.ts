/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateBasePolicyRequest = z.object({
  namespace: z.string().nullish(),
  basePolicyName: z.string().nullish(),
  description: z.string().nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  affectedClientIds: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish(),
  isHidden: z.boolean().nullish(),
  isHiddenPublic: z.boolean().nullish()
})

export interface UpdateBasePolicyRequest extends z.TypeOf<typeof UpdateBasePolicyRequest> {}
