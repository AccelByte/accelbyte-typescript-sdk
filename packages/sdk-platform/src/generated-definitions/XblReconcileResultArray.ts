/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XblReconcileResult } from './XblReconcileResult.js'

export const XblReconcileResultArray = z.array(XblReconcileResult)

export interface XblReconcileResultArray extends z.TypeOf<typeof XblReconcileResultArray> {}
