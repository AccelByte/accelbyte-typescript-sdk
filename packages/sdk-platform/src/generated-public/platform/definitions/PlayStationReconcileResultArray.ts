/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayStationReconcileResult } from './PlayStationReconcileResult.js'

export const PlayStationReconcileResultArray = z.array(PlayStationReconcileResult)

export interface PlayStationReconcileResultArray extends z.TypeOf<typeof PlayStationReconcileResultArray> {}
