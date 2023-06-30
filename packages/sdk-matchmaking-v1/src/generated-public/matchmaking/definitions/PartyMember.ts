/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PartyMember = z.object({ extra_attributes: z.record(z.any()), user_id: z.string() })

export interface PartyMember extends z.TypeOf<typeof PartyMember> {}
