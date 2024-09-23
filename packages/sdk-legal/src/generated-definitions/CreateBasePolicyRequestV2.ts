/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateBasePolicyRequestV2 = z.object({
  affectedClientIds: z.array(z.string()).nullish(),
  affectedCountries: z.array(z.string()).nullish(),
  basePolicyName: z.string().nullish(),
  description: z.string().nullish(),
  isHidden: z.boolean().nullish(),
  isHiddenPublic: z.boolean().nullish(),
  tags: z.array(z.string()).nullish(),
  typeId: z.string().nullish()
})

export interface CreateBasePolicyRequestV2 extends z.TypeOf<typeof CreateBasePolicyRequestV2> {}
