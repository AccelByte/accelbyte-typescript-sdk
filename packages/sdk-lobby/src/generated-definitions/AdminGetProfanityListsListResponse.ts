/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminGetProfanityListsListResponse = z.object({ isEnabled: z.boolean(), isMandatory: z.boolean(), name: z.string() })

export interface AdminGetProfanityListsListResponse extends z.TypeOf<typeof AdminGetProfanityListsListResponse> {}
