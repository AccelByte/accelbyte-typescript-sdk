/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Action } from './Action.js'

export const ActionArray = z.array(Action)

export interface ActionArray extends z.TypeOf<typeof ActionArray> {}
