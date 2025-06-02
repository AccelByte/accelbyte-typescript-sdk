/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GameSessionResponse } from './GameSessionResponse.js'
import { Pagination } from './Pagination.js'

export const GameSessionQueryResponse = z.object({ data: z.array(GameSessionResponse), paging: Pagination })

export interface GameSessionQueryResponse extends z.TypeOf<typeof GameSessionQueryResponse> {}
