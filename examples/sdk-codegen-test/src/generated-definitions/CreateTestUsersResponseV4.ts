/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateTestUserResponseV4 } from './CreateTestUserResponseV4.js'

export const CreateTestUsersResponseV4 = z.object({ data: z.array(CreateTestUserResponseV4) })

export interface CreateTestUsersResponseV4 extends z.TypeOf<typeof CreateTestUsersResponseV4> {}
