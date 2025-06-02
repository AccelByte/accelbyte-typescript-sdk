/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformDlcEntry } from './PlatformDlcEntry.js'

export const PlatformDlcConfigInfo = z.object({ data: z.array(PlatformDlcEntry).nullish() })

export interface PlatformDlcConfigInfo extends z.TypeOf<typeof PlatformDlcConfigInfo> {}
