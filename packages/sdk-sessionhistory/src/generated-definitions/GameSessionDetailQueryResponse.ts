/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionDetail } from './GameSessionDetail.js'
import { Pagination } from './Pagination.js'

export const GameSessionDetailQueryResponse = z.object({ data: z.array(GameSessionDetail), paging: Pagination })

export interface GameSessionDetailQueryResponse extends z.TypeOf<typeof GameSessionDetailQueryResponse> {}
