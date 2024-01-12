/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PreviewMetadata = z.object({ previewContentType: z.string(), previewFileExtension: z.string() })

export interface PreviewMetadata extends z.TypeOf<typeof PreviewMetadata> {}
