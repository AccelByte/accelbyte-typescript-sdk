/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ModerationRuleResponse } from './ModerationRuleResponse.js'
import { Pagination } from './Pagination.js'

export const ModerationRulesList = z.object({ data: z.array(ModerationRuleResponse), paging: Pagination })

export interface ModerationRulesList extends z.TypeOf<typeof ModerationRulesList> {}
