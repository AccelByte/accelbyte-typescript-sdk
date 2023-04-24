/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BlockedPlayerData } from './BlockedPlayerData'

export const GetAllPlayerBlockedUsersResponse = z.object({ data: z.array(BlockedPlayerData) })

export interface GetAllPlayerBlockedUsersResponse extends z.TypeOf<typeof GetAllPlayerBlockedUsersResponse> {}
