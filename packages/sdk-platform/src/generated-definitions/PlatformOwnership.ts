/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformOwnership = z.object({ owned: z.boolean() })

export interface PlatformOwnership extends z.TypeOf<typeof PlatformOwnership> {}
