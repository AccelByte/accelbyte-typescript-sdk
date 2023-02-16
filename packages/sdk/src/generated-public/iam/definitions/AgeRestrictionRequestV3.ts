/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AgeRestrictionRequestV3 = z.object({ ageRestriction: z.number().int(), enable: z.boolean() })

export interface AgeRestrictionRequestV3 extends z.TypeOf<typeof AgeRestrictionRequestV3> {}
