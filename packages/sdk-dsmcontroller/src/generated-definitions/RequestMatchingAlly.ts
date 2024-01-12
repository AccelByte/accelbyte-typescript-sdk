/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RequestMatchParty } from './RequestMatchParty.js'

export const RequestMatchingAlly = z.object({ matching_parties: z.array(RequestMatchParty) })

export interface RequestMatchingAlly extends z.TypeOf<typeof RequestMatchingAlly> {}
