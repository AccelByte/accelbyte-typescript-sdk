/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'

export const DataRetrievalStatus = z.enum(['Pending', 'InProgress', 'Completed', 'Canceled', 'Failed', 'Expired'])
export type DataRetrievalStatus = z.infer<typeof DataRetrievalStatus>

export const separatorVisibility = (visibilityDependency: boolean[], hiddenStyle: string) => {
  return visibilityDependency.some(dep => dep) ? '' : hiddenStyle
}
