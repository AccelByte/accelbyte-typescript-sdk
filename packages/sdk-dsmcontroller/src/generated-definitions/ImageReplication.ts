/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ImageReplication = z.object({ failure_code: z.string(), region: z.string(), status: z.string(), uri: z.string() })

export interface ImageReplication extends z.TypeOf<typeof ImageReplication> {}
