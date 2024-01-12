/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTagRequest = z.object({ tag: z.string() })

export interface CreateTagRequest extends z.TypeOf<typeof CreateTagRequest> {}
