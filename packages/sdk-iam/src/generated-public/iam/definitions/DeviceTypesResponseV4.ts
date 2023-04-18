/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceTypeResponseV4 } from './DeviceTypeResponseV4'

export const DeviceTypesResponseV4 = z.object({ data: z.array(DeviceTypeResponseV4) })

export interface DeviceTypesResponseV4 extends z.TypeOf<typeof DeviceTypesResponseV4> {}
