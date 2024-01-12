/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const RuleSetPayload = z.object({ data: z.record(z.any()), enable_custom_match_function: z.boolean(), name: z.string() })

export interface RuleSetPayload extends z.TypeOf<typeof RuleSetPayload> {}
