/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminAddProfanityFilterIntoListRequest = z.object({ filter: z.string(), note: z.string() })

export interface AdminAddProfanityFilterIntoListRequest extends z.TypeOf<typeof AdminAddProfanityFilterIntoListRequest> {}
