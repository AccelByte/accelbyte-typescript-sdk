/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BulkSaveItemResp } from './BulkSaveItemResp.js'

export const BulkSaveItemRespArray = z.array(BulkSaveItemResp)

export interface BulkSaveItemRespArray extends z.TypeOf<typeof BulkSaveItemRespArray> {}
