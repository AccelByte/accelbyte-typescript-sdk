/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { RetrieveUserInfoCacheStatusResponseArray } from '../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'
import { UserInfoAdmin$ } from './endpoints/UserInfoAdmin$.js'

export function UserInfoAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * @deprecated
   * Invalidate user info cache in agreement service.
   */
  async function deleteUserInfo_DEPRECATED(queryParams?: { namespace?: string | null }): Promise<unknown> {
    const $ = new UserInfoAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.deleteUserInfo_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Get user info cache last updated time per namespace.&lt;br&gt;The query parameter namespaces can be a list of namespace separated by comma.&lt;br&gt;If query parameter namespaces is empty, user info cache status for all available namespaces will be returned.
   */
  async function getUserInfo(queryParams?: { namespaces?: string | null }): Promise<RetrieveUserInfoCacheStatusResponseArray> {
    const $ = new UserInfoAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getUserInfo(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * @deprecated
   * Sync user info cache in agreement service with iam service.
   */
  async function updateUserInfo_DEPRECATED(queryParams: { namespace: string | null }): Promise<unknown> {
    const $ = new UserInfoAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateUserInfo_DEPRECATED(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    deleteUserInfo_DEPRECATED,
    getUserInfo,
    updateUserInfo_DEPRECATED
  }
}
