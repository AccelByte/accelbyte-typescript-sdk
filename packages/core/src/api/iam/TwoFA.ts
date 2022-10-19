/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { UsersV4$ } from '@od-web-sdk/generated-public/iam/UsersV4$'
import { Network } from '@od-web-sdk/utils/Network'

export class TwoFA {
  // need to get updated response from TwoFA, use cache: false
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = false) {}

  newInstance() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }

  getBackupCode = () => {
    return this.newInstance().fetchV4UsersMeMfaBackupCode()
  }

  enable2FABackupCodes = () => {
    return this.newInstance().postV4UsersMeMfaBackupCodeEnable()
  }

  generateBackupCodes = () => {
    return this.newInstance().postV4UsersMeMfaBackupCode()
  }

  downloadBackupCodes = () => {
    return this.newInstance().fetchV4UsersMeMfaBackupCodeDownload()
  }

  disableBackupCodes = () => {
    return this.newInstance().deleteV4UsersMeMfaBackupCodeDisable()
  }

  disableAuthenticator = () => {
    return this.newInstance().deleteV4UsersMeMfaAuthenticatorDisable()
  }

  getEnabledMethods = () => {
    return this.newInstance().fetchV4UsersMeMfaFactor()
  }

  makeFactorDefault = (factor: string) => {
    return this.newInstance().postV4UsersMeMfaFactor({ factor })
  }

  enable2FAAuthenticator = (code: string) => {
    return this.newInstance().postV4UsersMeMfaAuthenticatorEnable({ code })
  }

  generateSecretKey = () => {
    return this.newInstance().postV4UsersMeMfaAuthenticatorKey()
  }
}
