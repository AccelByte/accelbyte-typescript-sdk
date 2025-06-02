/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StopAppV1Response = z.object({ statusUrl: z.string().nullish() })

export interface StopAppV1Response extends z.TypeOf<typeof StopAppV1Response> {}
