/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Attribute } from './definitions/Attribute'
import { GameProfile$ } from './endpoints/GameProfile$'
import { GameProfileHeaderArray } from './definitions/GameProfileHeaderArray'
import { GameProfileInfo } from './definitions/GameProfileInfo'
import { GameProfileRequest } from './definitions/GameProfileRequest'
import { UserGameProfilesArray } from './definitions/UserGameProfilesArray'

export function GameProfileApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * Returns all profiles for specified users.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:GAMEPROFILE", action=2 (READ) <li><i>Returns</i>: list of profiles</ul>
   */
  async function getProfiles(queryParams: { userIds: string[] }): Promise<UserGameProfilesArray> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Returns all profiles' header for a user.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: list of profiles</li></ul>
   */
  async function getProfiles_ByUserId(userId: string): Promise<GameProfileHeaderArray> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfiles_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Create new profile for user.<br>Other detail info:<ul><li><i>Required permission</li>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=1 (CREATE)</li><li><i>Returns</li>: created game profile</li></ul>
   */
  async function createProfile_ByUserId(userId: string, data: GameProfileRequest): Promise<unknown> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createProfile_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Returns profile for a user.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: game profile info</li></ul>
   */
  async function getProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<GameProfileInfo> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getProfile_ByUserId_ByProfileId(userId, profileId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates user game profile, returns updated profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=4 (UPDATE)</li><li><i>Returns</i>: updated game profile</li></ul>
   */
  async function updateProfile_ByUserId_ByProfileId(userId: string, profileId: string, data: GameProfileRequest): Promise<GameProfileInfo> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateProfile_ByUserId_ByProfileId(userId, profileId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Deletes game profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=8 (DELETE)</li></ul>
   */
  async function deleteProfile_ByUserId_ByProfileId(userId: string, profileId: string): Promise<unknown> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteProfile_ByUserId_ByProfileId(userId, profileId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Returns game profile attribute.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=2 (READ)</li><li><i>Returns</i>: attribute info</li></ul>
   */
  async function getAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string
  ): Promise<Attribute> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getAttribute_ByUserId_ByProfileId_ByAttributeName(userId, profileId, attributeName)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates game profile attribute, returns updated profile.<br>Other detail info:<ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:USER:{userId}:GAMEPROFILE", action=4 (UPDATE)</li><li><i>Returns</i>: updated attribute</li></ul>
   */
  async function updateAttribute_ByUserId_ByProfileId_ByAttributeName(
    userId: string,
    profileId: string,
    attributeName: string,
    data: Attribute
  ): Promise<GameProfileInfo> {
    const $ = new GameProfile$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateAttribute_ByUserId_ByProfileId_ByAttributeName(userId, profileId, attributeName, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getProfiles,
    getProfiles_ByUserId,
    createProfile_ByUserId,
    getProfile_ByUserId_ByProfileId,
    updateProfile_ByUserId_ByProfileId,
    deleteProfile_ByUserId_ByProfileId,
    getAttribute_ByUserId_ByProfileId_ByAttributeName,
    updateAttribute_ByUserId_ByProfileId_ByAttributeName
  }
}
