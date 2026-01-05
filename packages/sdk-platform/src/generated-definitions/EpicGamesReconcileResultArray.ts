/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EpicGamesReconcileResult } from './EpicGamesReconcileResult.js'

export const EpicGamesReconcileResultArray = z.array(EpicGamesReconcileResult)

export interface EpicGamesReconcileResultArray extends z.TypeOf<typeof EpicGamesReconcileResultArray> {}
