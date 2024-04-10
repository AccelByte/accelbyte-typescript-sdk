/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTagReq = z.object({ name: z.string(), owner: z.enum(['CLIENT', 'SERVER']) })

export interface CreateTagReq extends z.TypeOf<typeof CreateTagReq> {}
