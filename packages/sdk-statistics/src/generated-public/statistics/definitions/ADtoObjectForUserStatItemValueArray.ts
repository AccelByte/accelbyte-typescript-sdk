/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ADtoObjectForUserStatItemValue } from './ADtoObjectForUserStatItemValue.js'

export const ADtoObjectForUserStatItemValueArray = z.array(ADtoObjectForUserStatItemValue)

export interface ADtoObjectForUserStatItemValueArray extends z.TypeOf<typeof ADtoObjectForUserStatItemValueArray> {}
