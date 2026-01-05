/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAllPlayerSessionAttributeResponse = z.object({ attributes: z.record(z.string()) })

export interface GetAllPlayerSessionAttributeResponse extends z.TypeOf<typeof GetAllPlayerSessionAttributeResponse> {}
