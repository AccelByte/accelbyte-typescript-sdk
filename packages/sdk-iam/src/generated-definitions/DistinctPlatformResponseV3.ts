/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DistinctLinkedPlatformV3 } from './DistinctLinkedPlatformV3.js'

export const DistinctPlatformResponseV3 = z.object({ platforms: z.array(DistinctLinkedPlatformV3) })

export interface DistinctPlatformResponseV3 extends z.TypeOf<typeof DistinctPlatformResponseV3> {}
