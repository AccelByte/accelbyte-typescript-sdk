/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CountryV3Response } from './CountryV3Response.js'

export const CountryV3ResponseArray = z.array(CountryV3Response)

export interface CountryV3ResponseArray extends z.TypeOf<typeof CountryV3ResponseArray> {}
