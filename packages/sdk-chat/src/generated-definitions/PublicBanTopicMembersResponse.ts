/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicBanTopicMembersResponse = z.object({ userIDs: z.array(z.string()) })

export interface PublicBanTopicMembersResponse extends z.TypeOf<typeof PublicBanTopicMembersResponse> {}
