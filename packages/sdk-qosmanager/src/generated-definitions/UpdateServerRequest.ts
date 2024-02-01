/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateServerRequest = z.object({ status: z.string() })

export interface UpdateServerRequest extends z.TypeOf<typeof UpdateServerRequest> {}
