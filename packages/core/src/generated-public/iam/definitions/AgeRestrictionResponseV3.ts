/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AgeRestrictionResponseV3 = z.object({ ageRestriction: z.number().int(), enable: z.boolean() })

export type AgeRestrictionResponseV3 = z.TypeOf<typeof AgeRestrictionResponseV3>
