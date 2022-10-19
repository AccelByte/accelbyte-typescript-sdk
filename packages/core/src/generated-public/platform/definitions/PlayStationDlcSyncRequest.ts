/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationDlcSyncRequest = z.object({ serviceLabel: z.number().int().nullish() })

export type PlayStationDlcSyncRequest = z.TypeOf<typeof PlayStationDlcSyncRequest>
