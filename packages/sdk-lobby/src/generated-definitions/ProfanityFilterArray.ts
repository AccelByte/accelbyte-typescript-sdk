/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProfanityFilter } from './ProfanityFilter.js'

export const ProfanityFilterArray = z.array(ProfanityFilter)

export interface ProfanityFilterArray extends z.TypeOf<typeof ProfanityFilterArray> {}
