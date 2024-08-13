/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ProposedProposal = z.object({
  BackfillID: z.string().nullish(),
  ProposalID: z.string().nullish(),
  Status: z.string().nullish()
})

export interface ProposedProposal extends z.TypeOf<typeof ProposedProposal> {}
