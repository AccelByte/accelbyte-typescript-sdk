/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AccountCreateRequest = z.object({ name: z.string() })

export interface AccountCreateRequest extends z.TypeOf<typeof AccountCreateRequest> {}
