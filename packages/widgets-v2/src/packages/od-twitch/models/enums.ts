/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export enum TwitchErrorCode {
  INVALID_PLATFORM_TOKEN = 39125,
  ERROR_USER_ID_NOT_LINKED = 39126,
  // TODO: This should be removed if from the endpoint twitch sync entitlement already give the correct code
  ERROR_USER_ID_NOT_LINKED_ALTERNATIVE = 20017,
  TWITCH_ACCOUNT_ALREADY_LINKED = 10172
}

export enum TwitchDropValidateStatus {
  VALIDATING = 'validating',
  SUCCESS = 'success',
  FAILED = 'failed'
}
