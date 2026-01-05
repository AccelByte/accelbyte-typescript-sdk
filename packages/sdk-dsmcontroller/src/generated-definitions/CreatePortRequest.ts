/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreatePortRequest = z.object({ port: z.number().int() })

export interface CreatePortRequest extends z.TypeOf<typeof CreatePortRequest> {}
