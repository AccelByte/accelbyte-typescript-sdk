/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { DeviceBanRequestV4 } from '../generated-definitions/DeviceBanRequestV4.js'
import { DeviceBanResponseV4 } from '../generated-definitions/DeviceBanResponseV4.js'
import { DeviceBanUpdateRequestV4 } from '../generated-definitions/DeviceBanUpdateRequestV4.js'
import { DeviceBannedResponseV4 } from '../generated-definitions/DeviceBannedResponseV4.js'
import { DeviceBansResponseV4 } from '../generated-definitions/DeviceBansResponseV4.js'
import { DeviceIdDecryptResponseV4 } from '../generated-definitions/DeviceIdDecryptResponseV4.js'
import { DeviceTypesResponseV4 } from '../generated-definitions/DeviceTypesResponseV4.js'
import { DeviceUsersResponseV4 } from '../generated-definitions/DeviceUsersResponseV4.js'
import { DevicesResponseV4 } from '../generated-definitions/DevicesResponseV4.js'
import { DevicesV4Admin$ } from './endpoints/DevicesV4Admin$.js'

export function DevicesV4AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getDevices_v4(queryParams?: { userId?: string | null }): Promise<AxiosResponse<DevicesResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevices_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDevicesBans_v4(queryParams: { userId: string | null }): Promise<AxiosResponse<DeviceBansResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesBans_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createDeviceBan_v4(data: DeviceBanRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeviceBan_v4(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDevicesTypes_v4(): Promise<AxiosResponse<DeviceTypesResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesTypes_v4()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDevicesBanned_v4(queryParams?: {
    deviceType?: string | null
    endDate?: string | null
    limit?: number
    offset?: number
    startDate?: string | null
  }): Promise<AxiosResponse<DeviceBannedResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesBanned_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDevicesReport_v4(queryParams: {
    deviceType: string | null
    endDate?: string | null
    startDate?: string | null
  }): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesReport_v4(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDeviceBan_ByBanId_v4(banId: string): Promise<AxiosResponse<DeviceBanResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeviceBan_ByBanId_v4(banId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateDeviceBan_ByBanId_v4(banId: string, data: DeviceBanUpdateRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDeviceBan_ByBanId_v4(banId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBans_ByDeviceId_v4(deviceId: string): Promise<AxiosResponse<DeviceBansResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByDeviceId_v4(deviceId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateUnban_ByDeviceId_v4(deviceId: string): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnban_ByDeviceId_v4(deviceId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsers_ByDeviceId_v4(deviceId: string): Promise<AxiosResponse<DeviceUsersResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_ByDeviceId_v4(deviceId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getDecrypt_ByDeviceId_v4(deviceId: string): Promise<AxiosResponse<DeviceIdDecryptResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDecrypt_ByDeviceId_v4(deviceId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This is the endpoint for an admin to get devices a user ever used to login
     */
    getDevices_v4,
    /**
     * This is the endpoint for an admin to get device bans of user
     */
    getDevicesBans_v4,
    /**
     * This is the endpoint for an admin to ban a device
     */
    createDeviceBan_v4,
    /**
     * This is the endpoint for an admin to get device types
     */
    getDevicesTypes_v4,
    /**
     * This is the endpoint for an admin to get banned devices
     */
    getDevicesBanned_v4,
    /**
     * This is the endpoint for an admin to generate device report
     */
    getDevicesReport_v4,
    /**
     * This is the endpoint for an admin to get device ban config
     */
    getDeviceBan_ByBanId_v4,
    /**
     * This is the endpoint for an admin to update a device ban config
     */
    updateDeviceBan_ByBanId_v4,
    /**
     * This is the endpoint for an admin to get device ban list
     */
    getBans_ByDeviceId_v4,
    /**
     * This is the endpoint for an admin to unban device
     */
    updateUnban_ByDeviceId_v4,
    /**
     * This is the endpoint for an admin to get users that ever login on the device
     */
    getUsers_ByDeviceId_v4,
    /**
     * @deprecated
     * This is the endpoint for an admin to decrypt device id
     */
    getDecrypt_ByDeviceId_v4
  }
}
