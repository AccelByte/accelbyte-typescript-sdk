/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { SteamAchievementUpdateRequest } from '../../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../../generated-definitions/XblUserAchievements.js'

export class AchievementPlatformAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This API is used to get xbox live user achievements(Only for test).
   */
  getAchievementXbl_ByUserId(userId: string, queryParams: { xboxUserId: string | null }): Promise<Response<XblUserAchievements>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/xbl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, XblUserAchievements, 'XblUserAchievements')
  }
  /**
   * This API is used to update xbox live achievements.
   */
  updateAchievementXbl_ByUserId(userId: string, data: XblAchievementUpdateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/xbl'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This API is used to unlock steam achievement.
   */
  updateAchievementSteam_ByUserId(userId: string, data: SteamAchievementUpdateRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/users/{userId}/achievement/steam'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
