/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceTypeResponseV4 } from './DeviceTypeResponseV4'

export const DeviceTypesResponseV4 = z.object({ data: z.array(DeviceTypeResponseV4) })

export type DeviceTypesResponseV4 = z.TypeOf<typeof DeviceTypesResponseV4>
