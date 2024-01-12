/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceBanResponseV4 } from './DeviceBanResponseV4.js'
import { Pagination } from './Pagination.js'

export const DeviceBannedResponseV4 = z.object({ data: z.array(DeviceBanResponseV4), paging: Pagination })

export interface DeviceBannedResponseV4 extends z.TypeOf<typeof DeviceBannedResponseV4> {}
