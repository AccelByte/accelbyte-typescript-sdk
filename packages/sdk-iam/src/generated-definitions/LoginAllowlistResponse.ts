/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LoginAllowlistResponse = z.object({ active: z.boolean(), namespace: z.string(), roleIds: z.array(z.string()) })

export interface LoginAllowlistResponse extends z.TypeOf<typeof LoginAllowlistResponse> {}
