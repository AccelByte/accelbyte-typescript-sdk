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
import { MemberActiveSession } from '../../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../../generated-definitions/RequestReconcileMaxActiveSession.js'

export class MaxActiveAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Reconcile Max Active Session.
   */
  updateReconcile_ByName(name: string, data: RequestReconcileMaxActiveSession): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}/reconcile'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   *  Get Member Active Session.
   */
  getMemberactivesession_ByName_ByUserId(name: string, userId: string): Promise<Response<MemberActiveSession>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}/memberactivesession/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, MemberActiveSession, 'MemberActiveSession')
  }
}
