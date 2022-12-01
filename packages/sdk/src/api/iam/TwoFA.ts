/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * <p>This method is used to get 8-digits backup codes.
   * Each code is a one-time code and will be deleted once used.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  getBackupCode = () => {
    return this.newInstance().fetchV4UsersMeMfaBackupCode()
  }

  /**
   * <p>This method is used to enable 2FA backup codes.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  enable2FABackupCodes = () => {
    return this.newInstance().postV4UsersMeMfaBackupCodeEnable()
  }

  /**
   * <p>This method is used to enable 2FA backup codes.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  generateBackupCodes = () => {
    return this.newInstance().postV4UsersMeMfaBackupCode()
  }

  /**
   * <p>This method is used to enable 2FA backup codes.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  disableBackupCodes = () => {
    return this.newInstance().deleteV4UsersMeMfaBackupCodeDisable()
  }

  /**
   * <p>This method is used to disable 2FA authenticator.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  disableAuthenticator = () => {
    return this.newInstance().deleteV4UsersMeMfaAuthenticatorDisable()
  }

  /**
   * <p>This method is used to get user enabled factors.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  getEnabledMethods = () => {
    return this.newInstance().fetchV4UsersMeMfaFactor()
  }

  /**
   * <p>This method is used to make 2FA factor default.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  set2FAAsDefault = (factor: string) => {
    return this.newInstance().postV4UsersMeMfaFactor({ factor })
  }

  /**
   * <p>This method is used to enable 2FA authenticator.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  enable2FAAuthenticator = (code: string) => {
    return this.newInstance().postV4UsersMeMfaAuthenticatorEnable({ code })
  }

  /**
   * <p>This method is used to generate a secret key for 3rd-party authenticator app.
   * A QR code URI is also returned so that frontend can generate QR code image.</p>
   * <p>This method Requires valid user access token</p>
   *
   */
  generateSecretKey = () => {
    return this.newInstance().postV4UsersMeMfaAuthenticatorKey()
  }

  requestEmailCode = () => {
    return this.newInstance().postV4UsersMeMfaEmailCode()
  }

  enableEmailMethod = (code: string) => {
    return this.newInstance().postV4UsersMeMfaEmailEnable({ code })
  }

  disableEmailMethod = () => {
    return this.newInstance().postV4UsersMeMfaEmailDisable()
  }

  private newInstance() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }
}
