/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlatformDlcEntry } from './PlatformDlcEntry'

export const PlatformDlcConfigUpdate = z.object({ data: z.array(PlatformDlcEntry).nullish() })

export interface PlatformDlcConfigUpdate extends z.TypeOf<typeof PlatformDlcConfigUpdate> {}
