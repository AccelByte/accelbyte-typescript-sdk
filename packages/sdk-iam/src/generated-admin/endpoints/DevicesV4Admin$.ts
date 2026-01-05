/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { DeviceBanRequestV4 } from '../../generated-definitions/DeviceBanRequestV4.js'
import { DeviceBanResponseV4 } from '../../generated-definitions/DeviceBanResponseV4.js'
import { DeviceBanUpdateRequestV4 } from '../../generated-definitions/DeviceBanUpdateRequestV4.js'
import { DeviceBannedResponseV4 } from '../../generated-definitions/DeviceBannedResponseV4.js'
import { DeviceBansResponseV4 } from '../../generated-definitions/DeviceBansResponseV4.js'
import { DeviceIdDecryptResponseV4 } from '../../generated-definitions/DeviceIdDecryptResponseV4.js'
import { DeviceTypesResponseV4 } from '../../generated-definitions/DeviceTypesResponseV4.js'
import { DeviceUsersResponseV4 } from '../../generated-definitions/DeviceUsersResponseV4.js'
import { DevicesResponseV4 } from '../../generated-definitions/DevicesResponseV4.js'

export class DevicesV4Admin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This is the endpoint for an admin to get devices a user ever used to login
   */
  getDevices_v4(queryParams?: { userId?: string | null }): Promise<Response<DevicesResponseV4>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DevicesResponseV4, 'DevicesResponseV4')
  }
  /**
   * This is the endpoint for an admin to get device bans of user
   */
  getDevicesBans_v4(queryParams: { userId: string | null }): Promise<Response<DeviceBansResponseV4>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/bans'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeviceBansResponseV4, 'DeviceBansResponseV4')
  }
  /**
   * This is the endpoint for an admin to ban a device
   */
  createDeviceBan_v4(data: DeviceBanRequestV4): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/bans'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the endpoint for an admin to get device types
   */
  getDevicesTypes_v4(): Promise<Response<DeviceTypesResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/types'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeviceTypesResponseV4, 'DeviceTypesResponseV4')
  }
  /**
   * This is the endpoint for an admin to get banned devices
   */
  getDevicesBanned_v4(queryParams?: {
    deviceType?: string | null
    endDate?: string | null
    limit?: number
    offset?: number
    startDate?: string | null
  }): Promise<Response<DeviceBannedResponseV4>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/banned'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeviceBannedResponseV4,
      'DeviceBannedResponseV4'
    )
  }
  /**
   * This is the endpoint for an admin to generate device report
   */
  getDevicesReport_v4(queryParams: {
    deviceType: string | null
    endDate?: string | null
    startDate?: string | null
  }): Promise<Response<unknown>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/report'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the endpoint for an admin to get device ban config
   */
  getDeviceBan_ByBanId_v4(banId: string): Promise<Response<DeviceBanResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/bans/{banId}'.replace('{namespace}', this.namespace).replace('{banId}', banId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeviceBanResponseV4, 'DeviceBanResponseV4')
  }
  /**
   * This is the endpoint for an admin to update a device ban config
   */
  updateDeviceBan_ByBanId_v4(banId: string, data: DeviceBanUpdateRequestV4): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/bans/{banId}'.replace('{namespace}', this.namespace).replace('{banId}', banId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the endpoint for an admin to get device ban list
   */
  getBans_ByDeviceId_v4(deviceId: string): Promise<Response<DeviceBansResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/bans'
      .replace('{namespace}', this.namespace)
      .replace('{deviceId}', deviceId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeviceBansResponseV4, 'DeviceBansResponseV4')
  }
  /**
   * This is the endpoint for an admin to unban device
   */
  updateUnban_ByDeviceId_v4(deviceId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/unban'
      .replace('{namespace}', this.namespace)
      .replace('{deviceId}', deviceId)
    const resultPromise = this.axiosInstance.put(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the endpoint for an admin to get users that ever login on the device
   */
  getUsers_ByDeviceId_v4(deviceId: string): Promise<Response<DeviceUsersResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/users'
      .replace('{namespace}', this.namespace)
      .replace('{deviceId}', deviceId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DeviceUsersResponseV4, 'DeviceUsersResponseV4')
  }
  /**
   * @deprecated
   * This is the endpoint for an admin to decrypt device id
   */
  getDecrypt_ByDeviceId_v4(deviceId: string): Promise<Response<DeviceIdDecryptResponseV4>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/decrypt'
      .replace('{namespace}', this.namespace)
      .replace('{deviceId}', deviceId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      DeviceIdDecryptResponseV4,
      'DeviceIdDecryptResponseV4'
    )
  }
}
