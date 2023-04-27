/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsmConfigRecord } from './DsmConfigRecord.js'

export const ListConfigResponse = z.object({ configs: z.array(DsmConfigRecord) })

export interface ListConfigResponse extends z.TypeOf<typeof ListConfigResponse> {}
