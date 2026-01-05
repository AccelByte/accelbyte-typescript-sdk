/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateAppV1Request = z.object({ description: z.string().nullish() })

export interface UpdateAppV1Request extends z.TypeOf<typeof UpdateAppV1Request> {}
