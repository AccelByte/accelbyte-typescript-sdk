/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockedByPlayerData } from './BlockedByPlayerData'

export const GetAllPlayerBlockedByUsersResponse = z.object({ data: z.array(BlockedByPlayerData) })

export interface GetAllPlayerBlockedByUsersResponse extends z.TypeOf<typeof GetAllPlayerBlockedByUsersResponse> {}
