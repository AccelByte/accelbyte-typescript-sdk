/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicUnbanTopicMembersResponse = z.object({ userIDs: z.array(z.string()) })

export interface PublicUnbanTopicMembersResponse extends z.TypeOf<typeof PublicUnbanTopicMembersResponse> {}
