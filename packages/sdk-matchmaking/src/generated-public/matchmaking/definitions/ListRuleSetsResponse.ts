/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { MatchRuleSetNameData } from './MatchRuleSetNameData'
import { Pagination } from './Pagination'

export const ListRuleSetsResponse = z.object({ data: z.array(MatchRuleSetNameData), pagination: Pagination })

export interface ListRuleSetsResponse extends z.TypeOf<typeof ListRuleSetsResponse> {}
