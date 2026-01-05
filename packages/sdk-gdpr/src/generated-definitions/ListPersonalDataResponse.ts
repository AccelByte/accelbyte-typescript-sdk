/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { PersonalData } from './PersonalData.js'

export const ListPersonalDataResponse = z.object({ Data: z.array(PersonalData), Paging: Pagination })

export interface ListPersonalDataResponse extends z.TypeOf<typeof ListPersonalDataResponse> {}
