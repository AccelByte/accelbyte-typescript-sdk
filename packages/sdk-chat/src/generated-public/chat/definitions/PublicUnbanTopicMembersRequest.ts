/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PublicUnbanTopicMembersRequest = z.object({ userIDs: z.array(z.string()) })

export interface PublicUnbanTopicMembersRequest extends z.TypeOf<typeof PublicUnbanTopicMembersRequest> {}
