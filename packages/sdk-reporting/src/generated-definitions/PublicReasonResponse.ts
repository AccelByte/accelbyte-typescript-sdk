/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicReasonResponse = z.object({ description: z.string(), title: z.string() })

export interface PublicReasonResponse extends z.TypeOf<typeof PublicReasonResponse> {}
