/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { CodeGenUtil } from '@od-web-sdk/utils/CodeGenUtil'
import { SdkCache } from '@od-web-sdk/utils/SdkCache'
import { IResponse, IResponseWithSync, Validate } from '@od-web-sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { AuthenticatorKeyResponseV4 } from './definitions/AuthenticatorKeyResponseV4'
import { BackupCodesResponseV4 } from './definitions/BackupCodesResponseV4'
import { CreateTestUserRequestV4 } from './definitions/CreateTestUserRequestV4'
import { CreateUserRequestV4 } from './definitions/CreateUserRequestV4'
import { CreateUserResponseV4 } from './definitions/CreateUserResponseV4'
import { EmailUpdateRequestV4 } from './definitions/EmailUpdateRequestV4'
import { EnabledFactorsResponseV4 } from './definitions/EnabledFactorsResponseV4'
/* eslint-disable camelcase */
import { UpgradeHeadlessAccountRequestV4 } from './definitions/UpgradeHeadlessAccountRequestV4'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4'
import { UserCreateFromInvitationRequestV4 } from './definitions/UserCreateFromInvitationRequestV4'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserResponseV4 } from './definitions/UserResponseV4'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class UsersV4$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  postV4TestUsers<T = CreateUserResponseV4>(data: CreateTestUserRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/test_users'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, CreateUserResponseV4)
  }

  postV4Users<T = CreateUserResponseV4>(data: CreateUserRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, CreateUserResponseV4)
  }

  postV4UsersInviteByInvitationid<T = CreateUserResponseV4>(
    invitationId: string,
    data: UserCreateFromInvitationRequestV4
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/invite/' + invitationId + ''
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, CreateUserResponseV4)
  }

  patchV4UsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV3)
  }

  putV4UsersMeEmail(data: EmailUpdateRequestV4): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/email'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV4UsersMeHeadlessCodeVerify<T = UserResponseV4>(data: UpgradeHeadlessAccountWithVerificationCodeRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/headless/code/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV4)
  }

  postV4UsersMeHeadlessVerify<T = UserResponseV4>(data: UpgradeHeadlessAccountRequestV4): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/headless/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV4)
  }

  deleteV4UsersMeMfaAuthenticatorDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/authenticator/disable'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV4UsersMeMfaAuthenticatorEnable(data: { code?: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/authenticator/enable'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV4UsersMeMfaAuthenticatorKey<T = AuthenticatorKeyResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/authenticator/key'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, AuthenticatorKeyResponseV4)
  }

  fetchV4UsersMeMfaBackupCode<T = BackupCodesResponseV4>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/backupCode'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, BackupCodesResponseV4)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV4UsersMeMfaBackupCode<T = BackupCodesResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/backupCode'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, BackupCodesResponseV4)
  }

  deleteV4UsersMeMfaBackupCodeDisable(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/backupCode/disable'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV4UsersMeMfaBackupCodeDownload(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/backupCode/download'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, z.unknown())

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV4UsersMeMfaBackupCodeEnable<T = BackupCodesResponseV4>(): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/backupCode/enable'
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, BackupCodesResponseV4)
  }

  deleteV4UsersMeMfaDevice(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/device'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV4UsersMeMfaFactor<T = EnabledFactorsResponseV4>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/factor'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, EnabledFactorsResponseV4)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV4UsersMeMfaFactor(data: { factor: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v4/public/namespaces/' + this.namespace + '/users/me/mfa/factor'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }
}
