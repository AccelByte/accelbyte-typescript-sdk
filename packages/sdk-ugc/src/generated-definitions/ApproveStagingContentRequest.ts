/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ApproveStagingContentRequest = z.object({ approved: z.boolean(), note: z.string().nullish() })

export interface ApproveStagingContentRequest extends z.TypeOf<typeof ApproveStagingContentRequest> {}
