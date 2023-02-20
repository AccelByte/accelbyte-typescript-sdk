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
   * GET [/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode](api)
   *
   * This method is used to get 8-digits backup codes.
   * Each code is a one-time code and will be deleted once used.
   *
   * _Requires a valid user access token_
   */
  getBackupCode = () => {
    return this.newInstance().fetchV4NsUsersMeMfaBackupCode()
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable](api)
   *
   * This method is used to enable 2FA backup codes.
   *
   * _Requires a valid user access token_
   */
  enable2FABackupCodes = () => {
    return this.newInstance().postV4NsUsersMeMfaBackupCodeEnable()
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode](api)
   *
   * This method is used to enable 2FA backup codes.
   *
   * _Requires a valid user access token_
   */
  generateBackupCodes = () => {
    return this.newInstance().postV4NsUsersMeMfaBackupCode()
  }

  /**
   * DELETE [/iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable](api)
   *
   * This method is used to enable 2FA backup codes.
   *
   * _Requires a valid user access token_
   */
  disableBackupCodes = () => {
    return this.newInstance().deleteV4NsUsersMeMfaBackupCodeDisable()
  }

  /**
   * DELETE [/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable](api)
   * }
   * This method is used to disable 2FA authenticator.
   *
   * _Requires a valid user access token_
   */
  disableAuthenticator = () => {
    return this.newInstance().deleteV4NsUsersMeMfaAuthenticatorDisable()
  }

  /**
   * GET [/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor](api)
   *
   * This method is used to get user enabled factors.
   *
   * _Requires a valid user access token_
   */
  getEnabledMethods = () => {
    return this.newInstance().fetchV4NsUsersMeMfaFactor()
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/factor](api)
   *
   * This method is used to make 2FA factor default.
   *
   * _Requires a valid user access token_
   */
  set2FAAsDefault = (factor: string) => {
    return this.newInstance().postV4NsUsersMeMfaFactor({ factor })
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/enable](api)
   *
   * This method is used to enable 2FA authenticator.
   *
   * _Requires a valid user access token_
   */
  enable2FAAuthenticator = (code: string) => {
    return this.newInstance().postV4NsUsersMeMfaAuthenticatorEnable({ code })
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key](api)
   *
   * This method is used to generate a secret key for 3rd-party authenticator app.
   * A QR code URI is also returned so that frontend can generate QR code image.
   *
   * _Requires a valid user access token_
   */
  generateSecretKey = () => {
    return this.newInstance().postV4NsUsersMeMfaAuthenticatorKey()
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code](api)
   */
  requestEmailCode = () => {
    return this.newInstance().postV4NsUsersMeMfaEmailCode()
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/enable](api)
   */
  enableEmailMethod = (code: string) => {
    return this.newInstance().postV4NsUsersMeMfaEmailEnable({ code })
  }

  /**
   * POST [/iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable](api)
   */
  disableEmailMethod = () => {
    return this.newInstance().postV4NsUsersMeMfaEmailDisable()
  }

  private newInstance() {
    return new UsersV4$(Network.create(this.conf), this.namespace, this.cache)
  }
}
