/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModerationRuleActiveRequest = z.object({ active: z.boolean() })

export interface ModerationRuleActiveRequest extends z.TypeOf<typeof ModerationRuleActiveRequest> {}
