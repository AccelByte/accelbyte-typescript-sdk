/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UnmuteUserRequest = z.object({ userId: z.string() })

export interface UnmuteUserRequest extends z.TypeOf<typeof UnmuteUserRequest> {}
