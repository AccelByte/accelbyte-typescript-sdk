/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceInfo } from './NamespaceInfo.js'

export const NamespaceInfoArray = z.array(NamespaceInfo)

export interface NamespaceInfoArray extends z.TypeOf<typeof NamespaceInfoArray> {}
