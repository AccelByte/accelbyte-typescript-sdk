/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ForgotPasswordRequestV3 } from '../definitions/ForgotPasswordRequestV3.js'
import { ListBulkUserResponse } from '../definitions/ListBulkUserResponse.js'
import { UserCreateFromInvitationRequestV3 } from '../definitions/UserCreateFromInvitationRequestV3.js'
import { UserCreateRequestV3 } from '../definitions/UserCreateRequestV3.js'
import { UserCreateResponseV3 } from '../definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from '../definitions/UserIDsRequest.js'
import { UserInvitationV3 } from '../definitions/UserInvitationV3.js'
import { VerifyRegistrationCode } from '../definitions/VerifyRegistrationCode.js'

export class UsersPublic$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   *  &lt;p&gt;Available Authentication Types:&lt;/p&gt; &lt;ol&gt; &lt;li&gt;&lt;strong&gt;EMAILPASSWD&lt;/strong&gt;: an authentication type used for new user registration through email.&lt;/li&gt; &lt;/ol&gt; &lt;p&gt;Country use ISO3166-1 alpha-2 two letter, e.g. US.&lt;/p&gt; &lt;p&gt;Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.&lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  createUser(data: UserCreateRequestV3): Promise<IResponse<UserCreateResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserCreateResponseV3, 'UserCreateResponseV3')
  }

  /**
   * &lt;p&gt;&lt;strong&gt;Special note for publisher-game scenario:&lt;/strong&gt; Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. &lt;/p&gt; &lt;p&gt;The password reset code will be sent to the publisher account&#39;s email address. &lt;/p&gt; &lt;p&gt;action code : 10104 &lt;/p&gt;
   */
  createUserForgot(data: ForgotPasswordRequestV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/forgot'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * &lt;p&gt;Notes:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time&lt;/li&gt; &lt;li&gt;If namespace is game, will search by game user Id, other wise will search by publisher namespace&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Result will include displayName(if it exists)&lt;/strong&gt;&lt;/li&gt; &lt;/ul&gt;
   */
  createUserBulkBasic(data: UserIDsRequest): Promise<IResponse<ListBulkUserResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/bulk/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, ListBulkUserResponse, 'ListBulkUserResponse')
  }

  /**
   * &lt;p&gt;Verify the registration code&lt;/p&gt;
   */
  createUserCodeVerify(data: VerifyRegistrationCode): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/code/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
   */
  getUserInvite_ByInvitationId(invitationId: string): Promise<IResponseWithSync<UserInvitationV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, UserInvitationV3, 'UserInvitationV3')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
   */
  createUserInvite_ByInvitationId(invitationId: string, data: UserCreateFromInvitationRequestV3): Promise<IResponse<UserCreateResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}'
      .replace('{namespace}', this.namespace)
      .replace('{invitationId}', invitationId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.responseType(() => resultPromise, UserCreateResponseV3, 'UserCreateResponseV3')
  }
}
