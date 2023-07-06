/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BackFillAcceptRequest = z.object({ proposalId: z.string(), stop: z.boolean() })

export interface BackFillAcceptRequest extends z.TypeOf<typeof BackFillAcceptRequest> {}
