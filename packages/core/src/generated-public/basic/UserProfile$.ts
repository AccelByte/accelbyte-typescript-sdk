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
import { UserProfileCreate } from './definitions/UserProfileCreate'
import { UserProfileInfo } from './definitions/UserProfileInfo'
import { UserProfilePrivateCreate } from './definitions/UserProfilePrivateCreate'
import { UserProfilePrivateInfo } from './definitions/UserProfilePrivateInfo'
import { UserProfilePrivateUpdate } from './definitions/UserProfilePrivateUpdate'
import { UserProfilePublicInfo } from './definitions/UserProfilePublicInfo'
import { UserProfilePublicInfoArray } from './definitions/UserProfilePublicInfoArray'
/* eslint-disable camelcase */
import { UserProfileStatusUpdate } from './definitions/UserProfileStatusUpdate'
import { UserProfileUpdate } from './definitions/UserProfileUpdate'
import { UserZipCode } from './definitions/UserZipCode'
import { UserZipCodeUpdate } from './definitions/UserZipCodeUpdate'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class UserProfile$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = true) {}

  fetchV1ProfilesPublic<T = UserProfilePublicInfoArray>(queryParams?: { userIds: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/profiles/public'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserProfilePublicInfoArray)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV1ProfilesPublicByPublicId<T = UserProfilePublicInfo>(queryParams?: { publicId: string | null }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/profiles/public/byPublicId'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserProfilePublicInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV1UsersMeProfilesPrivateCustomAttributes(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles/privateCustomAttributes'
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

  putV1UsersMeProfilesPrivateCustomAttributes(data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles/privateCustomAttributes'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV1UsersMeProfiles<T = UserProfilePrivateInfo>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserProfilePrivateInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV1UsersMeProfiles<T = UserProfilePrivateInfo>(data: UserProfilePrivateCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserProfilePrivateInfo)
  }

  putV1UsersMeProfiles<T = UserProfilePrivateInfo>(data: UserProfilePrivateUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserProfilePrivateInfo)
  }

  fetchV1UsersMeProfilesZipCode<T = UserZipCode>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles/zipCode'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserZipCode)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  patchV1UsersMeProfilesZipCode<T = UserZipCode>(data: UserZipCodeUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/me/profiles/zipCode'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserZipCode)
  }

  fetchV1UsersByUseridProfilesPublic<T = UserProfilePublicInfo>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles/public'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserProfilePublicInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV1UsersByUseridProfilesCustomAttributes(userId: string): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles/customAttributes'
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

  putV1UsersByUseridProfilesCustomAttributes(userId: string, data: any): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles/customAttributes'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, z.unknown())
  }

  fetchV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      Validate.responseType(() => {
        return resultPromise
      }, UserProfileInfo)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  postV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string, data: UserProfileCreate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserProfileInfo)
  }

  putV1UsersByUseridProfiles<T = UserProfileInfo>(userId: string, data: UserProfileUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles'
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserProfileInfo)
  }

  patchV1UsersByUseridProfilesStatus<T = UserProfileInfo>(userId: string, data: UserProfileStatusUpdate): Promise<IResponse<T>> {
    const params = {} as SDKRequestConfig
    const url = '/basic/v1/public/namespaces/' + this.namespace + '/users/' + userId + '/profiles/status'
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.responseType(() => {
      return resultPromise
    }, UserProfileInfo)
  }
}
