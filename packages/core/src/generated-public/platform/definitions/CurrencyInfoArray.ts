/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CurrencyInfo } from './CurrencyInfo'

export const CurrencyInfoArray = z.array(CurrencyInfo)

export type CurrencyInfoArray = z.TypeOf<typeof CurrencyInfoArray>
