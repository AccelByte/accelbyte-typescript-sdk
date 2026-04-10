/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryResponse } from './CountryResponse.js'

export const CountryResponseArray = z.array(CountryResponse)

export interface CountryResponseArray extends z.TypeOf<typeof CountryResponseArray> {}
