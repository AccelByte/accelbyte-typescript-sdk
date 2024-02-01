/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTagResponse = z.object({ id: z.string(), namespace: z.string(), tag: z.string() })

export interface CreateTagResponse extends z.TypeOf<typeof CreateTagResponse> {}
