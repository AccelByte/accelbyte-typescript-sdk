/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceResponseV4 } from './DeviceResponseV4.js'

export const DevicesResponseV4 = z.object({ devices: z.array(DeviceResponseV4) })

export interface DevicesResponseV4 extends z.TypeOf<typeof DevicesResponseV4> {}
