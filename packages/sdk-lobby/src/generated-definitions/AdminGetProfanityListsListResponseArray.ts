/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminGetProfanityListsListResponse } from './AdminGetProfanityListsListResponse.js'

export const AdminGetProfanityListsListResponseArray = z.array(AdminGetProfanityListsListResponse)

export interface AdminGetProfanityListsListResponseArray extends z.TypeOf<typeof AdminGetProfanityListsListResponseArray> {}
