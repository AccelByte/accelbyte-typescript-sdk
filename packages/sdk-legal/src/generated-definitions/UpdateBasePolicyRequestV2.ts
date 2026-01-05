/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateBasePolicyRequestV2 = z.object({
  affectedClientIds: z.array(z.string()).nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  basePolicyName: z.string().nullish(),
  countryGroupName: z.string().nullish(),
  countryType: z.enum(['COUNTRY', 'COUNTRY_GROUP']).nullish(),
  description: z.string().nullish(),
  isHidden: z.boolean().nullish(),
  isHiddenPublic: z.boolean().nullish(),
  tags: z.array(z.string()).nullish()
})

export interface UpdateBasePolicyRequestV2 extends z.TypeOf<typeof UpdateBasePolicyRequestV2> {}
