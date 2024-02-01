/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
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

export function DevicesV4AdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This is the endpoint for an admin to get devices a user ever used to login
   */
  async function getDevices(queryParams?: { userId?: string | null }): Promise<DevicesResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDevices(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get device bans of user
   */
  async function getDevicesBans(queryParams: { userId: string | null }): Promise<DeviceBansResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDevicesBans(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to ban a device
   */
  async function createDeviceBan(data: DeviceBanRequestV4): Promise<unknown> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createDeviceBan(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get device types
   */
  async function getDevicesTypes(): Promise<DeviceTypesResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDevicesTypes()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get banned devices
   */
  async function getDevicesBanned(queryParams?: {
    deviceType?: string | null
    endDate?: string | null
    limit?: number
    offset?: number
    startDate?: string | null
  }): Promise<DeviceBannedResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDevicesBanned(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to generate device report
   */
  async function getDevicesReport(queryParams: {
    deviceType: string | null
    endDate?: string | null
    startDate?: string | null
  }): Promise<unknown> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDevicesReport(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get device ban config
   */
  async function getDeviceBan_ByBanId(banId: string): Promise<DeviceBanResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDeviceBan_ByBanId(banId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to update a device ban config
   */
  async function updateDeviceBan_ByBanId(banId: string, data: DeviceBanUpdateRequestV4): Promise<unknown> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateDeviceBan_ByBanId(banId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get device ban list
   */
  async function getBans_ByDeviceId(deviceId: string): Promise<DeviceBansResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getBans_ByDeviceId(deviceId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to unban device
   */
  async function updateUnban_ByDeviceId(deviceId: string): Promise<unknown> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.updateUnban_ByDeviceId(deviceId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to get users that ever login on the device
   */
  async function getUsers_ByDeviceId(deviceId: string): Promise<DeviceUsersResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getUsers_ByDeviceId(deviceId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the endpoint for an admin to decrypt device id
   */
  async function getDecrypt_ByDeviceId(deviceId: string): Promise<DeviceIdDecryptResponseV4> {
    const $ = new DevicesV4Admin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getDecrypt_ByDeviceId(deviceId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getDevices,
    getDevicesBans,
    createDeviceBan,
    getDevicesTypes,
    getDevicesBanned,
    getDevicesReport,
    getDeviceBan_ByBanId,
    updateDeviceBan_ByBanId,
    getBans_ByDeviceId,
    updateUnban_ByDeviceId,
    getUsers_ByDeviceId,
    getDecrypt_ByDeviceId
  }
}
