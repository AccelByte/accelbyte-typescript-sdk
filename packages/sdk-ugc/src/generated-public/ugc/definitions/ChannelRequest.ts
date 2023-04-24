/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ChannelRequest = z.object({ id: z.string().nullish(), name: z.string() })

export interface ChannelRequest extends z.TypeOf<typeof ChannelRequest> {}
