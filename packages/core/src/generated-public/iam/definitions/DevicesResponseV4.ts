/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceResponseV4 } from './DeviceResponseV4'

export const DevicesResponseV4 = z.object({ devices: z.array(DeviceResponseV4) })

export type DevicesResponseV4 = z.TypeOf<typeof DevicesResponseV4>
