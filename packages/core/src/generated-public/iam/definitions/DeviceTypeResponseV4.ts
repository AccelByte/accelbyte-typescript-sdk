/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceTypeResponseV4 = z.object({ deviceType: z.string() })

export type DeviceTypeResponseV4 = z.TypeOf<typeof DeviceTypeResponseV4>
