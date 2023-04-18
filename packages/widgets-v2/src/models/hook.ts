/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { FetchErrorType } from '~/constants/fetch-statuses'

export type HookDataReturns<T> =
  | {
      error: FetchErrorType
      data?: null
    }
  | {
      error?: null
      data: T
    }
