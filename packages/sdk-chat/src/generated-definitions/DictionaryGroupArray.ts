/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryGroup } from './DictionaryGroup.js'

export const DictionaryGroupArray = z.array(DictionaryGroup)

export interface DictionaryGroupArray extends z.TypeOf<typeof DictionaryGroupArray> {}
