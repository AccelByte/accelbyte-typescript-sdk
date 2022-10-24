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
import { CountryV3Response } from './definitions/CountryV3Response'
import { CreateJusticeUserResponse } from './definitions/CreateJusticeUserResponse'
import { DistinctPlatformResponseV3 } from './definitions/DistinctPlatformResponseV3'
import { ForgotPasswordRequestV3 } from './definitions/ForgotPasswordRequestV3'
import { GetPublisherUserV3Response } from './definitions/GetPublisherUserV3Response'
import { GetUserBanV3Response } from './definitions/GetUserBanV3Response'
import { GetUserMappingV3Array } from './definitions/GetUserMappingV3Array'
import { LinkPlatformAccountRequest } from './definitions/LinkPlatformAccountRequest'
import { LinkPlatformAccountWithProgressionRequest } from './definitions/LinkPlatformAccountWithProgressionRequest'
import { LinkRequest } from './definitions/LinkRequest'
import { ListBulkUserResponse } from './definitions/ListBulkUserResponse'
import { LoginHistoriesResponse } from './definitions/LoginHistoriesResponse'
import { PlatformUserIdRequest } from './definitions/PlatformUserIdRequest'
import { PublicUserInformationResponseV3 } from './definitions/PublicUserInformationResponseV3'
import { PublicUserResponseV3 } from './definitions/PublicUserResponseV3'
import { ResetPasswordRequestV3 } from './definitions/ResetPasswordRequestV3'
import { SendRegisterVerificationCodeRequest } from './definitions/SendRegisterVerificationCodeRequest'
import { SendVerificationCodeRequestV3 } from './definitions/SendVerificationCodeRequestV3'
/* eslint-disable camelcase */
import { SendVerificationLinkRequest } from './definitions/SendVerificationLinkRequest'
import { UnlinkUserPlatformRequest } from './definitions/UnlinkUserPlatformRequest'
import { UpgradeHeadlessAccountV3Request } from './definitions/UpgradeHeadlessAccountV3Request'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from './definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3'
import { UserCreateFromInvitationRequestV3 } from './definitions/UserCreateFromInvitationRequestV3'
import { UserCreateRequestV3 } from './definitions/UserCreateRequestV3'
import { UserCreateResponseV3 } from './definitions/UserCreateResponseV3'
import { UserIDsRequest } from './definitions/UserIDsRequest'
import { UserInformationV3 } from './definitions/UserInformationV3'
import { UserInvitationV3 } from './definitions/UserInvitationV3'
import { UserLinkedPlatformsResponseV3 } from './definitions/UserLinkedPlatformsResponseV3'
import { UserPasswordUpdateV3Request } from './definitions/UserPasswordUpdateV3Request'
import { UserPlatforms } from './definitions/UserPlatforms'
import { UserResponseV3 } from './definitions/UserResponseV3'
import { UserUpdateRequestV3 } from './definitions/UserUpdateRequestV3'
import { UserVerificationRequestV3 } from './definitions/UserVerificationRequestV3'
import { VerifyRegistrationCode } from './definitions/VerifyRegistrationCode'
import { WebLinkingResponse } from './definitions/WebLinkingResponse'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Users$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchV3AgerestrictionsCountriesByCountrycode<T = CountryV3Response>(countryCode: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/agerestrictions/countries/' + countryCode + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, CountryV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV3PlatformsByPlatformidUsers<T = UserPlatforms>(platformId: string, data: PlatformUserIdRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/platforms/' + platformId + '/users'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserPlatforms)
  }

  fetchV3PlatformsByPlatformidUsersByPlatformuserid<T = UserResponseV3>(
    platformId: string,
    platformUserId: string
  ): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/platforms/' + platformId + '/users/' + platformUserId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3RequestsByRequestidAsyncStatus<T = LinkRequest>(requestId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/requests/' + requestId + '/async/status'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, LinkRequest)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3Users<T = PublicUserInformationResponseV3>(queryParams?: {
    query?: string | null
    by?: string | null
    limit?: string | null
    offset?: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PublicUserInformationResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV3Users<T = UserCreateResponseV3>(data: UserCreateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserCreateResponseV3)
  }

  fetchV3UsersAvailability(queryParams?: { field: string | null; query: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/availability'
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

  postV3UsersBulkBasic<T = ListBulkUserResponse>(data: UserIDsRequest): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/bulk/basic'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, ListBulkUserResponse)
  }

  postV3UsersCodeRequest(data: SendRegisterVerificationCodeRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/code/request'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersCodeVerify(data: VerifyRegistrationCode): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/code/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersForgot(data: ForgotPasswordRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/forgot'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV3UsersInviteByInvitationid<T = UserInvitationV3>(invitationId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/invite/' + invitationId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserInvitationV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV3UsersInviteByInvitationid<T = UserCreateResponseV3>(
    invitationId: string,
    data: UserCreateFromInvitationRequestV3
  ): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/invite/' + invitationId + ''
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserCreateResponseV3)
  }

  putV3UsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV3)
  }

  patchV3UsersMe<T = UserResponseV3>(data: UserUpdateRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV3)
  }

  postV3UsersMeCodeRequest(data: SendVerificationCodeRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/code/request'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersMeCodeVerify(data: UserVerificationRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/code/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersMeHeadlessCodeVerify<T = UserResponseV3>(data: UpgradeHeadlessAccountWithVerificationCodeRequestV3): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/headless/code/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV3)
  }

  postV3UsersMeHeadlessVerify<T = UserResponseV3>(data: UpgradeHeadlessAccountV3Request): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/headless/verify'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserResponseV3)
  }

  putV3UsersMePassword(data: UserPasswordUpdateV3Request): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/password'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersMePlatformsJusticeByTargetnamespace<T = CreateJusticeUserResponse>(targetNamespace: string): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/justice/' + targetNamespace + ''
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, CreateJusticeUserResponse)
  }

  postV3UsersMePlatformsByPlatformid(
    platformId: string,
    data: { ticket: string | null; redirectUri?: string | null }
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + ''
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  deleteV3UsersMePlatformsByPlatformid(platformId: string, data: UnlinkUserPlatformRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + ''
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  deleteV3UsersMePlatformsByPlatformidAll(platformId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + '/all'
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersMePlatformsByPlatformidForce(platformId: string, data: { ticket: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + '/force'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV3UsersMePlatformsByPlatformidWebLink<T = WebLinkingResponse>(
    platformId: string,
    queryParams?: { clientId?: string | null; redirectUri?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + '/web/link'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, WebLinkingResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersMePlatformsByPlatformidWebLinkEstablish(
    platformId: string,
    queryParams?: { state: string | null }
  ): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/me/platforms/' + platformId + '/web/link/establish'
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

  postV3UsersReset(data: ResetPasswordRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/reset'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV3UsersByUserid<T = PublicUserResponseV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + ''
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, PublicUserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridBans<T = GetUserBanV3Response>(
    userId: string,
    queryParams?: { activeOnly?: boolean | null; limit?: number; before?: string | null; after?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/bans'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, GetUserBanV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridDistinctPlatforms<T = DistinctPlatformResponseV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/distinctPlatforms'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, DistinctPlatformResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridInformation<T = UserInformationV3>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/information'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserInformationV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridLoginsHistories<T = LoginHistoriesResponse>(
    userId: string,
    queryParams?: { before?: number | null; after?: number | null; limit?: number }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/logins/histories'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, LoginHistoriesResponse)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridPlatforms<T = UserLinkedPlatformsResponseV3>(
    userId: string,
    queryParams?: { limit?: number; after?: string | null; before?: string | null }
  ): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/platforms'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserLinkedPlatformsResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV3UsersByUseridPlatformsJustice<T = GetUserMappingV3Array>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/platforms/justice'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, GetUserMappingV3Array)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV3UsersByUseridPlatformsLink(userId: string, data: LinkPlatformAccountRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/platforms/link'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  postV3UsersByUseridPlatformsLinkWithProgression(
    userId: string,
    data: LinkPlatformAccountWithProgressionRequest
  ): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/platforms/linkWithProgression'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV3UsersByUseridPublisher<T = GetPublisherUserV3Response>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/publisher'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, GetPublisherUserV3Response)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV3UsersByUseridValidate(userId: string, data: { password: string | null }): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/' + this.namespace + '/users/' + userId + '/validate'
    const resultPromise = this.axiosInstance.post(url, CodeGenUtil.getFormUrlEncodedData(data), {
      ...params,
      headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' }
    })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchIamV3PublicUsersMe<T = UserResponseV3>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/users/me'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserResponseV3)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postIamV3PublicUsersMeVerifyLinkRequest(data: SendVerificationLinkRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/users/me/verify_link/request'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchIamV3PublicUsersVerifyLinkVerify(queryParams?: { code?: string | null }): Promise<IResponseWithSync<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/public/users/verify_link/verify'
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
}
