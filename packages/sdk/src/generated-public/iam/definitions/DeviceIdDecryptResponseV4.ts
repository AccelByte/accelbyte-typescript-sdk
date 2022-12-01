/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceIdDecryptResponseV4 = z.object({ deviceId: z.string() })

export type DeviceIdDecryptResponseV4 = z.TypeOf<typeof DeviceIdDecryptResponseV4>
