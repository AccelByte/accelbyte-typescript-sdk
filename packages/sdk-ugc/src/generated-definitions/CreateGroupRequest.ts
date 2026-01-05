/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateGroupRequest = z.object({ contents: z.array(z.string()), name: z.string() })

export interface CreateGroupRequest extends z.TypeOf<typeof CreateGroupRequest> {}
