/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const LoginAllowlistRequest = z.object({ active: z.boolean(), roleIds: z.array(z.string()) })

export interface LoginAllowlistRequest extends z.TypeOf<typeof LoginAllowlistRequest> {}
