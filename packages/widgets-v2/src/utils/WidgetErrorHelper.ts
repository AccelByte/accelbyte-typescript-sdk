/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType } from '~/constants/fetch-statuses'

export class WidgetErrorHelper {
  static getErrorType(error: unknown): FetchErrorType {
    console.error(error)
    return error as Error
  }
}
