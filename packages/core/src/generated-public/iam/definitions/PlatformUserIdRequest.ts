/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformUserIdRequest = z.object({ platformUserIds: z.array(z.string()) })

export type PlatformUserIdRequest = z.TypeOf<typeof PlatformUserIdRequest>
