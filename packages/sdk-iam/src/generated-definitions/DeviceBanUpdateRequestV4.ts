/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceBanUpdateRequestV4 = z.object({ enabled: z.boolean() })

export interface DeviceBanUpdateRequestV4 extends z.TypeOf<typeof DeviceBanUpdateRequestV4> {}
