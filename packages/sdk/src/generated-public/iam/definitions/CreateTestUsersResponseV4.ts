/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { CreateTestUserResponseV4 } from './CreateTestUserResponseV4'

export const CreateTestUsersResponseV4 = z.object({ data: z.array(CreateTestUserResponseV4) })

export type CreateTestUsersResponseV4 = z.TypeOf<typeof CreateTestUsersResponseV4>
