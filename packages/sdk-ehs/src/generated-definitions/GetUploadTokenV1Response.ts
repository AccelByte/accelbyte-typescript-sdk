/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetUploadTokenV1Response = z.object({ repositoryBaseUrl: z.string(), token: z.string(), username: z.string() })

export interface GetUploadTokenV1Response extends z.TypeOf<typeof GetUploadTokenV1Response> {}
