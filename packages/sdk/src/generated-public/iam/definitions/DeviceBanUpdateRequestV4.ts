/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeviceBanUpdateRequestV4 = z.object({ enabled: z.boolean() })

export type DeviceBanUpdateRequestV4 = z.TypeOf<typeof DeviceBanUpdateRequestV4>
