/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DistinctLinkedPlatformV3 } from './DistinctLinkedPlatformV3'

export const DistinctPlatformResponseV3 = z.object({ platforms: z.array(DistinctLinkedPlatformV3) })

export type DistinctPlatformResponseV3 = z.TypeOf<typeof DistinctPlatformResponseV3>
