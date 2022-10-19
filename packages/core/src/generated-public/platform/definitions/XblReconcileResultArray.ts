/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { XblReconcileResult } from './XblReconcileResult'

export const XblReconcileResultArray = z.array(XblReconcileResult)

export type XblReconcileResultArray = z.TypeOf<typeof XblReconcileResultArray>
