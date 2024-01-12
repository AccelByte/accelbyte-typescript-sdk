/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminAddProfanityFiltersFilterRequest } from './AdminAddProfanityFiltersFilterRequest.js'

export const AdminAddProfanityFiltersRequest = z.object({ filters: z.array(AdminAddProfanityFiltersFilterRequest) })

export interface AdminAddProfanityFiltersRequest extends z.TypeOf<typeof AdminAddProfanityFiltersRequest> {}
