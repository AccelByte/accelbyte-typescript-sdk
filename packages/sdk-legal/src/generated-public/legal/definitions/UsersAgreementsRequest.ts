/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UsersAgreementsRequest = z.object({ currentPublishedOnly: z.boolean().nullish(), userIds: z.array(z.string()) })

export interface UsersAgreementsRequest extends z.TypeOf<typeof UsersAgreementsRequest> {}
