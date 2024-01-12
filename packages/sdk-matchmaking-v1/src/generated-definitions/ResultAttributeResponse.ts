/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ResultAttributeResponse = z.object({ attribute: z.string(), value: z.number() })

export interface ResultAttributeResponse extends z.TypeOf<typeof ResultAttributeResponse> {}
