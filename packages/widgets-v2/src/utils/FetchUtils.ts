/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { FetchStatus } from '~/constants/fetch-statuses'

export class FetchUtils {
  static isMatchStatus = (statuses: FetchStatus[], expected: FetchStatus) => {
    return statuses.every(status => status === expected)
  }
}
