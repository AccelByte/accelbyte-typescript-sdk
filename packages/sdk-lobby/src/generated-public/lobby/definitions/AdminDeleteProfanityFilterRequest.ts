/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminDeleteProfanityFilterRequest = z.object({ filter: z.string() })

export interface AdminDeleteProfanityFilterRequest extends z.TypeOf<typeof AdminDeleteProfanityFilterRequest> {}
