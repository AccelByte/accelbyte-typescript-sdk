/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PartyTeam = z.object({ PartyID: z.string().nullish(), UserIDs: z.array(z.string()).nullish() })

export interface PartyTeam extends z.TypeOf<typeof PartyTeam> {}
