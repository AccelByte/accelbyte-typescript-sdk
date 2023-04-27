/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceUserResponseV4 } from './DeviceUserResponseV4.js'

export const DeviceUsersResponseV4 = z.object({ users: z.array(DeviceUserResponseV4) })

export interface DeviceUsersResponseV4 extends z.TypeOf<typeof DeviceUsersResponseV4> {}
