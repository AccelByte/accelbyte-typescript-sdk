/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject.js'

export const AddCountryGroupResponse = z.object({
  countries: z.array(CountryObject).nullish(),
  countryGroupCode: z.string().nullish(),
  countryGroupName: z.string().nullish()
})

export interface AddCountryGroupResponse extends z.TypeOf<typeof AddCountryGroupResponse> {}
