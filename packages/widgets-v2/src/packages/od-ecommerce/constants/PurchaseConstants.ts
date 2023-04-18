/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class PurchaseConstants {
  // For launcher, we don't want to redirect to a URL after purchasing, since launcher runs on `file://` protocol.
  // Reference: https://accelbyte.atlassian.net/browse/CW-298.
  static AVOID_REDIRECT_TO_FILE_PROTOCOL = null
}
