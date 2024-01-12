/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchingParty } from './MatchingParty.js'

export const MatchingPartyArray = z.array(MatchingParty)

export interface MatchingPartyArray extends z.TypeOf<typeof MatchingPartyArray> {}
