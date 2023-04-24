/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminCreateProfanityListRequest = z.object({ isEnabled: z.boolean(), isMandatory: z.boolean(), name: z.string() })

export interface AdminCreateProfanityListRequest extends z.TypeOf<typeof AdminCreateProfanityListRequest> {}
