/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UsersAgreementsRequest = z.object({ userIds: z.array(z.string()), currentPublishedOnly: z.boolean().nullish() })

export interface UsersAgreementsRequest extends z.TypeOf<typeof UsersAgreementsRequest> {}
