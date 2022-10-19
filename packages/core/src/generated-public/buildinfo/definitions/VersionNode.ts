/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const VersionNode = z.object({ buildId: z.string().nullish(), distance: z.number().int().nullish() })

export type VersionNode = z.TypeOf<typeof VersionNode>
