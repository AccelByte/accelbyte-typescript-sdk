/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AvatarConfig = z.object({ allowedPrefixes: z.array(z.string()), preferRegex: z.boolean(), regex: z.string() })

export interface AvatarConfig extends z.TypeOf<typeof AvatarConfig> {}
