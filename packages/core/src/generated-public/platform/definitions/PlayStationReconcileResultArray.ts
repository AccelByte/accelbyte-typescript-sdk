/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PlayStationReconcileResult } from './PlayStationReconcileResult'

export const PlayStationReconcileResultArray = z.array(PlayStationReconcileResult)

export type PlayStationReconcileResultArray = z.TypeOf<typeof PlayStationReconcileResultArray>
