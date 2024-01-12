/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ChannelV1 } from './ChannelV1.js'

export const ChannelV1Array = z.array(ChannelV1)

export interface ChannelV1Array extends z.TypeOf<typeof ChannelV1Array> {}
