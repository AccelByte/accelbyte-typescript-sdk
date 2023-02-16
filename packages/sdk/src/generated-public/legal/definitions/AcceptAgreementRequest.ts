/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AcceptAgreementRequest = z.object({
  localizedPolicyVersionId: z.string(),
  policyVersionId: z.string(),
  policyId: z.string(),
  isAccepted: z.boolean(),
  isNeedToSendEventMarketing: z.boolean().nullish()
})

export interface AcceptAgreementRequest extends z.TypeOf<typeof AcceptAgreementRequest> {}
