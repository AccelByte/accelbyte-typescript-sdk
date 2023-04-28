/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RuleInformation = z.object({
  ruleAttribute: z.string(),
  ruleCriteria: z.enum(['EQUAL', 'MINIMUM', 'MAXIMUM']),
  ruleValue: z.number()
})

export interface RuleInformation extends z.TypeOf<typeof RuleInformation> {}