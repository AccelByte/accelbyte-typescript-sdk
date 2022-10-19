/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BuildManifest } from './BuildManifest'

export const UploadModeCheck = z.object({ buildManifest: BuildManifest.nullish(), uploadDifferentialMode: z.boolean().nullish() })

export type UploadModeCheck = z.TypeOf<typeof UploadModeCheck>
