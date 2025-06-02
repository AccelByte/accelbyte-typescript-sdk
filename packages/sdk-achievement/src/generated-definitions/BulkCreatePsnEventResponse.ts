/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnEventResult } from './PsnEventResult.js'

export const BulkCreatePsnEventResponse = z.object({ data: z.array(PsnEventResult) })

export interface BulkCreatePsnEventResponse extends z.TypeOf<typeof BulkCreatePsnEventResponse> {}
