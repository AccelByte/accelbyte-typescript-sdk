/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { AdminPlayerRecordKeyInfo } from './AdminPlayerRecordKeyInfo.js'
import { Pagination } from './Pagination.js'

export const ListAdminPlayerRecordKeysResponse = z.object({ data: z.array(AdminPlayerRecordKeyInfo), paging: Pagination })

export interface ListAdminPlayerRecordKeysResponse extends z.TypeOf<typeof ListAdminPlayerRecordKeysResponse> {}
