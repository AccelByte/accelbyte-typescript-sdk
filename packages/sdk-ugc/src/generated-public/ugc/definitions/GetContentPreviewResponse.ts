/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PreviewUrl } from './PreviewUrl'

export const GetContentPreviewResponse = z.object({ preview: z.string(), previewURL: PreviewUrl.nullish() })

export interface GetContentPreviewResponse extends z.TypeOf<typeof GetContentPreviewResponse> {}
