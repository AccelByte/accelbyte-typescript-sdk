/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingParty } from './MatchingParty.js'

export const MatchingAlly = z.object({ matching_parties: z.array(MatchingParty).nullish() })

export interface MatchingAlly extends z.TypeOf<typeof MatchingAlly> {}
