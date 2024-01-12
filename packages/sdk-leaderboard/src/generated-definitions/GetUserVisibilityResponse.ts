/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetUserVisibilityResponse = z.object({ namespace: z.string(), userId: z.string(), visibility: z.boolean() })

export interface GetUserVisibilityResponse extends z.TypeOf<typeof GetUserVisibilityResponse> {}
