/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const VersionNode = z.object({ buildId: z.string().nullish(), distance: z.number().int().nullish() })

export interface VersionNode extends z.TypeOf<typeof VersionNode> {}
