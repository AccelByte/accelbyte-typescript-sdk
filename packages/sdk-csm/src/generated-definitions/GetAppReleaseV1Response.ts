/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetAppReleaseV1Response = z.object({
  deploymentId: z.string().nullish(),
  imageTag: z.string().nullish(),
  releaseDate: z.string().nullish()
})

export interface GetAppReleaseV1Response extends z.TypeOf<typeof GetAppReleaseV1Response> {}
