/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { PersonalData } from './PersonalData'

export const ListPersonalDataResponse = z.object({ Data: z.array(PersonalData), Paging: Pagination })

export type ListPersonalDataResponse = z.TypeOf<typeof ListPersonalDataResponse>
