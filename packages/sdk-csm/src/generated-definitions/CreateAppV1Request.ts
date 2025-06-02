/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateAppV1Request = z.object({ description: z.string().nullish(), scenario: z.string().nullish() })

export interface CreateAppV1Request extends z.TypeOf<typeof CreateAppV1Request> {}
