/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryObject } from './CountryObject.js'

export const CountryObjectArray = z.array(CountryObject)

export interface CountryObjectArray extends z.TypeOf<typeof CountryObjectArray> {}
