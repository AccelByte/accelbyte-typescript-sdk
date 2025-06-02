/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject.js'

export const UpdateCountryGroupRequest = z.object({ countries: z.array(CountryObject).nullish(), countryGroupName: z.string().nullish() })

export interface UpdateCountryGroupRequest extends z.TypeOf<typeof UpdateCountryGroupRequest> {}
