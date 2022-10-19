/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformDlcEntry } from './PlatformDlcEntry'

export const PlatformDlcConfigInfo = z.object({ data: z.array(PlatformDlcEntry).nullish() })

export type PlatformDlcConfigInfo = z.TypeOf<typeof PlatformDlcConfigInfo>
