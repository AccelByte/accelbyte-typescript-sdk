/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PartyMembers = z.object({ partyID: z.string(), userIDs: z.array(z.string()) })

export interface PartyMembers extends z.TypeOf<typeof PartyMembers> {}
