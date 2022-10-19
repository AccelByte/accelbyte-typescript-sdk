/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CompatibilityObject = z.object({ appId: z.string().nullish(), buildId: z.string().nullish(), version: z.string().nullish() })

export type CompatibilityObject = z.TypeOf<typeof CompatibilityObject>
