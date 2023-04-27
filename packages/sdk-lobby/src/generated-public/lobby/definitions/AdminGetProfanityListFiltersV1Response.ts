/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ProfanityFilter } from './ProfanityFilter.js'

export const AdminGetProfanityListFiltersV1Response = z.object({ filters: z.array(ProfanityFilter) })

export interface AdminGetProfanityListFiltersV1Response extends z.TypeOf<typeof AdminGetProfanityListFiltersV1Response> {}
