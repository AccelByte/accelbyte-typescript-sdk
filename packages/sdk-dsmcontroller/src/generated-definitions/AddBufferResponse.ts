/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AddBufferResponse = z.object({ Message: z.string() })

export interface AddBufferResponse extends z.TypeOf<typeof AddBufferResponse> {}
