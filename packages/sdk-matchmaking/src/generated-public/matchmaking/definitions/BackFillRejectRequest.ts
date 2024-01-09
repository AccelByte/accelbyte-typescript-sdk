/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BackFillRejectRequest = z.object({ proposalId: z.string(), stop: z.boolean() })

export interface BackFillRejectRequest extends z.TypeOf<typeof BackFillRejectRequest> {}
