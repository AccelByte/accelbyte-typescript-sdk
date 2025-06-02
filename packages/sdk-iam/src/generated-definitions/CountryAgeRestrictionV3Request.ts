/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryAgeRestrictionV3Request = z.object({ ageRestriction: z.number().int() })

export interface CountryAgeRestrictionV3Request extends z.TypeOf<typeof CountryAgeRestrictionV3Request> {}
