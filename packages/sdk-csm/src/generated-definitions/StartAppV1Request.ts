/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const StartAppV1Request = z.object({ reason: z.string().nullish() })

export interface StartAppV1Request extends z.TypeOf<typeof StartAppV1Request> {}
