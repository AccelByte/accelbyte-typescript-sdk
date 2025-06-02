/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetUserJusticePlatformAccountResponse = z.object({ DesignatedNamespace: z.string(), UserID: z.string() })

export interface GetUserJusticePlatformAccountResponse extends z.TypeOf<typeof GetUserJusticePlatformAccountResponse> {}
