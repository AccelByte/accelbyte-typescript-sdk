/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AcceptAgreementRequest = z.object({
  isAccepted: z.boolean(),
  isNeedToSendEventMarketing: z.boolean().nullish(),
  localizedPolicyVersionId: z.string(),
  policyId: z.string(),
  policyVersionId: z.string()
})

export interface AcceptAgreementRequest extends z.TypeOf<typeof AcceptAgreementRequest> {}
