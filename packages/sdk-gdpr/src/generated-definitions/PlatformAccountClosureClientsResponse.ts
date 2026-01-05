/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformAccountClosureClientResponse } from './PlatformAccountClosureClientResponse.js'

export const PlatformAccountClosureClientsResponse = z.object({ data: z.array(PlatformAccountClosureClientResponse) })

export interface PlatformAccountClosureClientsResponse extends z.TypeOf<typeof PlatformAccountClosureClientsResponse> {}
