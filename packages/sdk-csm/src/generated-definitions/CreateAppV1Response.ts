/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateAppV1Response = z.object({ statusUrl: z.string().nullish() })

export interface CreateAppV1Response extends z.TypeOf<typeof CreateAppV1Response> {}
