/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceIdDecryptResponseV4 = z.object({ deviceId: z.string() })

export interface DeviceIdDecryptResponseV4 extends z.TypeOf<typeof DeviceIdDecryptResponseV4> {}
