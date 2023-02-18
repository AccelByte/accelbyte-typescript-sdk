/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { UsersV4$ } from '@accelbyte/sdk/generated-public/iam/UsersV4$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class TwoFA {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * This method is used to get 8-digits backup codes.
   * Each code is a one-time code and will be deleted once used.
   * This method Requires valid user access token
   *
   */
  getBackupCode = () => {
    return this.newInstance().fetchV4NsUsersMeMfaBackupCode()
  }

  /**
   * This method is used to enable 2FA backup codes.
   * This method Requires valid user access token
   *
   */
  enable2FABackupCodes = () => {
    return this.newInstance().postV4NsUsersMeMfaBackupCodeEnable()
  }

  /**
   * This method is used to enable 2FA backup codes.
   * This method Requires valid user access token
   *
   */
  generateBackupCodes = () => {
    return this.newInstance().postV4NsUsersMeMfaBackupCode()
  }

  /**
   * This method is used to enable 2FA backup codes.
   * This method Requires valid user access token
   *
   */
  disableBackupCodes = () => {
    return this.newInstance().deleteV4NsUsersMeMfaBackupCodeDisable()
  }

  /**
   * This method is used to disable 2FA authenticator.
   * This method Requires valid user access token
   *
   */
  disableAuthenticator = () => {
    return this.newInstance().deleteV4NsUsersMeMfaAuthenticatorDisable()
  }

  /**
   * This method is used to get user enabled factors.
   * This method Requires valid user access token
   *
   */
  getEnabledMethods = () => {
    return this.newInstance().fetchV4NsUsersMeMfaFactor()
  }

  /**
   * This method is used to make 2FA factor default.
   * This method Requires valid user access token
   *
   */
  set2FAAsDefault = (factor: string) => {
    return this.newInstance().postV4NsUsersMeMfaFactor({ factor })
  }

  /**
   * This method is used to enable 2FA authenticator.
   * This method Requires valid user access token
   *
   */
  enable2FAAuthenticator = (code: string) => {
    return this.newInstance().postV4NsUsersMeMfaAuthenticatorEnable({ code })
  }

  /**
   * This method is used to generate a secret key for 3rd-party authenticator app.
   * A QR code URI is also returned so that frontend can generate QR code image.
   * This method Requires valid user access token
   *
   */
  generateSecretKey = () => {
    return this.newInstance().postV4NsUsersMeMfaAuthenticatorKey()
  }

  requestEmailCode = () => {
    return this.newInstance().postV4NsUsersMeMfaEmailCode()
  }

  enableEmailMethod = (code: string) => {
    return this.newInstance().postV4NsUsersMeMfaEmailEnable({ code })
  }

  disableEmailMethod = () => {
    return this.newInstance().postV4NsUsersMeMfaEmailDisable()
  }

  private newInstance() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }
}
