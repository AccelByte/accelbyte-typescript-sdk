/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicUserResponse } from './PublicUserResponse.js'

export const PublicUsersResponse = z.object({ Users: z.array(PublicUserResponse).nullish() })

export interface PublicUsersResponse extends z.TypeOf<typeof PublicUsersResponse> {}
