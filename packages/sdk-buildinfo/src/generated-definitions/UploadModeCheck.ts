/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildManifest } from './BuildManifest.js'

export const UploadModeCheck = z.object({ buildManifest: BuildManifest.nullish(), uploadDifferentialMode: z.boolean().nullish() })

export interface UploadModeCheck extends z.TypeOf<typeof UploadModeCheck> {}
