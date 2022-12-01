/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceBanResponseV4 } from './DeviceBanResponseV4'
import { Pagination } from './Pagination'

export const DeviceBannedResponseV4 = z.object({ data: z.array(DeviceBanResponseV4), paging: Pagination })

export type DeviceBannedResponseV4 = z.TypeOf<typeof DeviceBannedResponseV4>
