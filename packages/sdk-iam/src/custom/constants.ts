/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import cryptoJs from 'crypto-js'

export enum IamConfigKey {
  UNIQUE_DISPLAY_NAME_ENABLED = 'uniqueDisplayNameEnabled',
  USERNAME_DISABLED = 'usernameDisabled'
}

// feature flag name is changed to avoid being tampered in the local storage
export const mandatoryAccountUpgradeLocalStorageName = cryptoJs.MD5('isMandatoryThirdPartyAccountUpgradeOrLinkEnabled').toString()
