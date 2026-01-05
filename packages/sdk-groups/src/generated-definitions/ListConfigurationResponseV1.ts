/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetGroupConfigurationResponseV1 } from './GetGroupConfigurationResponseV1.js'
import { Pagination } from './Pagination.js'

export const ListConfigurationResponseV1 = z.object({ data: z.array(GetGroupConfigurationResponseV1), paging: Pagination })

export interface ListConfigurationResponseV1 extends z.TypeOf<typeof ListConfigurationResponseV1> {}
