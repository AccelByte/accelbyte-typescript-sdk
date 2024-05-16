/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { SteamAchievementUpdateRequest } from '../../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../../generated-definitions/XblUserAchievements.js'

export class AchievementPlatformAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This API is used to get xbox live user achievements(Only for test).
   */
  getAchievementXbl_ByUserId(userId: string, queryParams: { xboxUserId: string | null }): Promise<IResponse<XblUserAchievements>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/xbl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, XblUserAchievements, 'XblUserAchievements')
  }

  /**
   * This API is used to update xbox live achievements.
   */
  updateAchievementXbl_ByUserId(userId: string, data: XblAchievementUpdateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/xbl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * This API is used to unlock steam achievement.
   */
  updateAchievementSteam_ByUserId(userId: string, data: SteamAchievementUpdateRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/steam'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
