/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination'
import { UserPersonalData } from './UserPersonalData'

export const UserPersonalDataResponse = z.object({ Data: z.array(UserPersonalData), Paging: Pagination })

export type UserPersonalDataResponse = z.TypeOf<typeof UserPersonalDataResponse>
