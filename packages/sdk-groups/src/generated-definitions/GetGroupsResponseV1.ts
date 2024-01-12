/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GroupResponseV1 } from './GroupResponseV1.js'

export const GetGroupsResponseV1 = z.object({ data: z.array(GroupResponseV1) })

export interface GetGroupsResponseV1 extends z.TypeOf<typeof GetGroupsResponseV1> {}
