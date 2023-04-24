/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DebugProfanityFilterRequest = z.object({ text: z.string() })

export interface DebugProfanityFilterRequest extends z.TypeOf<typeof DebugProfanityFilterRequest> {}
