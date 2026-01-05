/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AvailablePredicate } from './AvailablePredicate.js'

export const AvailablePredicateArray = z.array(AvailablePredicate)

export interface AvailablePredicateArray extends z.TypeOf<typeof AvailablePredicateArray> {}
