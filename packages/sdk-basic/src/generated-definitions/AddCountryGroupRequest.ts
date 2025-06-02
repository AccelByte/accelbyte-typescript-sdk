/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject.js'

export const AddCountryGroupRequest = z.object({
  countries: z.array(CountryObject).nullish(),
  countryGroupCode: z.string().nullish(),
  countryGroupName: z.string().nullish()
})

export interface AddCountryGroupRequest extends z.TypeOf<typeof AddCountryGroupRequest> {}
