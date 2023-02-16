/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PlayStationDlcSyncRequest = z.object({ serviceLabel: z.number().int().nullish() })

export interface PlayStationDlcSyncRequest extends z.TypeOf<typeof PlayStationDlcSyncRequest> {}
