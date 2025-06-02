/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicReasonGroupResponse = z.object({ id: z.string(), title: z.string() })

export interface PublicReasonGroupResponse extends z.TypeOf<typeof PublicReasonGroupResponse> {}
