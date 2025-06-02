/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StartAppV1Response = z.object({ statusUrl: z.string().nullish() })

export interface StartAppV1Response extends z.TypeOf<typeof StartAppV1Response> {}
