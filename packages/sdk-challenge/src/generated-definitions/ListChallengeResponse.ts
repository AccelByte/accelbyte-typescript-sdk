/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChallengeResponse } from './ChallengeResponse.js'
import { Pagination } from './Pagination.js'

export const ListChallengeResponse = z.object({ data: z.array(ChallengeResponse), paging: Pagination })

export interface ListChallengeResponse extends z.TypeOf<typeof ListChallengeResponse> {}
