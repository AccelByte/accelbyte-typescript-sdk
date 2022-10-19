/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DeviceUserResponseV4 } from './DeviceUserResponseV4'

export const DeviceUsersResponseV4 = z.object({ users: z.array(DeviceUserResponseV4) })

export type DeviceUsersResponseV4 = z.TypeOf<typeof DeviceUsersResponseV4>
