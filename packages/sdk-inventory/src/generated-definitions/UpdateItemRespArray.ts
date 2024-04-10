/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UpdateItemResp } from './UpdateItemResp.js'

export const UpdateItemRespArray = z.array(UpdateItemResp)

export interface UpdateItemRespArray extends z.TypeOf<typeof UpdateItemRespArray> {}
