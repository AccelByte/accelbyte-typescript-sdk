/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceBanResponseV4 } from './DeviceBanResponseV4.js'

export const DeviceBansResponseV4 = z.object({ data: z.array(DeviceBanResponseV4) })

export interface DeviceBansResponseV4 extends z.TypeOf<typeof DeviceBansResponseV4> {}
