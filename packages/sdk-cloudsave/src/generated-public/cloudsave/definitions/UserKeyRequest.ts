/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserKeyRequest = z.object({ keys: z.array(z.string()), user_id: z.string() })

export interface UserKeyRequest extends z.TypeOf<typeof UserKeyRequest> {}
