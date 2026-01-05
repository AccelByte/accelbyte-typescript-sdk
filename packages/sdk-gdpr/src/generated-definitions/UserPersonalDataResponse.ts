/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Pagination } from './Pagination.js'
import { UserPersonalData } from './UserPersonalData.js'

export const UserPersonalDataResponse = z.object({ Data: z.array(UserPersonalData), Paging: Pagination })

export interface UserPersonalDataResponse extends z.TypeOf<typeof UserPersonalDataResponse> {}
