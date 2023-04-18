/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export enum FetchStatus {
  IDLE = 'idle',
  FETCHING = 'fetching',
  CREATING = 'creating',
  UPDATING = 'updating',

  PURCHASING = 'purchasing',
  CLAIMING = 'claiming',
  REDEEMING = 'redeeming',

  CANCELLING = 'cancelling',
  REQUESTING = 'requesting',
  VERIFYING = 'verifying',
  DELETING = 'deleting',
  DOWNLOADING = 'downloading'
}

export type FetchErrorType = Error
