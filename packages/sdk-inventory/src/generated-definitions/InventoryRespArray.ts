/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { InventoryResp } from './InventoryResp.js'

export const InventoryRespArray = z.array(InventoryResp)

export interface InventoryRespArray extends z.TypeOf<typeof InventoryRespArray> {}
