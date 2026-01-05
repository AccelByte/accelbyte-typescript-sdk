/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGroupCustomRuleRequestV1 = z.object({ groupCustomRule: z.record(z.any()) })

export interface UpdateGroupCustomRuleRequestV1 extends z.TypeOf<typeof UpdateGroupCustomRuleRequestV1> {}
