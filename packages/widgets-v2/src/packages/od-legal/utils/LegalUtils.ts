/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UrlConstants } from '@od-shared/constants/UrlConstants'
import { Env } from '@od-shared/Env'

export class LegalUtils {
  static getLegalUrl = (isLegalV2Enabled: boolean) => {
    const v2Url = Env.LEGAL_WEB_V2_URL ? Env.LEGAL_WEB_V2_URL : Env.BASE_URL + UrlConstants.LEGAL_V2_PATH
    return isLegalV2Enabled ? v2Url : Env.LEGAL_WEB_URL
  }
}
