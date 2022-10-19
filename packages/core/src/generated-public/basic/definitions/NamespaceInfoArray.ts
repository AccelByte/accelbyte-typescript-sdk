/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceInfo } from './NamespaceInfo'

export const NamespaceInfoArray = z.array(NamespaceInfo)

export type NamespaceInfoArray = z.TypeOf<typeof NamespaceInfoArray>
