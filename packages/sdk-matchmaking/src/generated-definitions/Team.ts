/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Party } from './Party.js'

export const Team = z.object({ Parties: z.array(Party), UserIDs: z.array(z.string()) })

export interface Team extends z.TypeOf<typeof Team> {}
