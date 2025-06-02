/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryAgeRestrictionRequest = z.object({ AgeRestriction: z.number().int() })

export interface CountryAgeRestrictionRequest extends z.TypeOf<typeof CountryAgeRestrictionRequest> {}
