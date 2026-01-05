/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OculusReconcileResult } from './OculusReconcileResult.js'

export const OculusReconcileResultArray = z.array(OculusReconcileResult)

export interface OculusReconcileResultArray extends z.TypeOf<typeof OculusReconcileResultArray> {}
