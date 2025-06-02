/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlatformUserIdRequestV4 = z.object({ pidType: z.string().nullish(), platformUserIds: z.array(z.string()) })

export interface PlatformUserIdRequestV4 extends z.TypeOf<typeof PlatformUserIdRequestV4> {}
