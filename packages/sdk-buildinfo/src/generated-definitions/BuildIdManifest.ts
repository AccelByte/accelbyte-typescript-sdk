/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BuildIdManifest = z.object({ buildId: z.string().nullish() })

export interface BuildIdManifest extends z.TypeOf<typeof BuildIdManifest> {}
