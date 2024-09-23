/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PartyMembers } from './PartyMembers.js'

export const Team = z.object({ parties: z.array(PartyMembers).nullish(), userIDs: z.array(z.string()).nullish() })

export interface Team extends z.TypeOf<typeof Team> {}
