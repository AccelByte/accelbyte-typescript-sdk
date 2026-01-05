/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RetrieveSimplePolicyPublicResponseV2 } from './RetrieveSimplePolicyPublicResponseV2.js'

export const RetrieveSimplePolicyPublicResponseV2Array = z.array(RetrieveSimplePolicyPublicResponseV2)

export interface RetrieveSimplePolicyPublicResponseV2Array extends z.TypeOf<typeof RetrieveSimplePolicyPublicResponseV2Array> {}
