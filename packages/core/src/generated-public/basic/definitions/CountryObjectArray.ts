/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject'

export const CountryObjectArray = z.array(CountryObject)

export type CountryObjectArray = z.TypeOf<typeof CountryObjectArray>
