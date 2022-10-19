/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryAgeRestrictionV3Request = z.object({ ageRestriction: z.number().int() })

export type CountryAgeRestrictionV3Request = z.TypeOf<typeof CountryAgeRestrictionV3Request>
