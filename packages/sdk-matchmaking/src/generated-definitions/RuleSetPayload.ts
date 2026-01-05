/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RuleSetPayloadData } from './RuleSetPayloadData.js'

export const RuleSetPayload = z.object({ data: RuleSetPayloadData, enable_custom_match_function: z.boolean(), name: z.string() })

export interface RuleSetPayload extends z.TypeOf<typeof RuleSetPayload> {}
