/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryAgeRestriction } from './CountryAgeRestriction.js'

export const CountryAgeRestrictionArray = z.array(CountryAgeRestriction)

export interface CountryAgeRestrictionArray extends z.TypeOf<typeof CountryAgeRestrictionArray> {}
