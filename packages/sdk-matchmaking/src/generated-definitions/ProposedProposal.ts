/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ProposedProposal = z.object({ BackfillID: z.string(), ProposalID: z.string(), Status: z.string() })

export interface ProposedProposal extends z.TypeOf<typeof ProposedProposal> {}
