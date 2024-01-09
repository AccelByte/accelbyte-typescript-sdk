/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MatchmakerParty = z.object({ partyID: z.string(), userIDs: z.array(z.string()) })

export interface MatchmakerParty extends z.TypeOf<typeof MatchmakerParty> {}
