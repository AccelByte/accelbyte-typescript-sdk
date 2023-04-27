/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyMembers } from './PartyMembers.js'

export const Team = z.object({ UserIDs: z.array(z.string()), parties: z.array(PartyMembers).nullish() })

export interface Team extends z.TypeOf<typeof Team> {}
