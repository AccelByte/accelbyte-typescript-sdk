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
import { ForgotPasswordRequestV3 } from './definitions/ForgotPasswordRequestV3.js'
import { ListBulkUserResponse } from './definitions/ListBulkUserResponse.js'
import { UserCreateFromInvitationRequestV3 } from './definitions/UserCreateFromInvitationRequestV3.js'
import { UserCreateRequestV3 } from './definitions/UserCreateRequestV3.js'
import { UserCreateResponseV3 } from './definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from './definitions/UserIDsRequest.js'
import { UserInvitationV3 } from './definitions/UserInvitationV3.js'
import { UsersPublic$ } from './endpoints/UsersPublic$.js'
import { VerifyRegistrationCode } from './definitions/VerifyRegistrationCode.js'

export function UsersPublicApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   *  &lt;p&gt;Available Authentication Types:&lt;/p&gt; &lt;ol&gt; &lt;li&gt;&lt;strong&gt;EMAILPASSWD&lt;/strong&gt;: an authentication type used for new user registration through email.&lt;/li&gt; &lt;/ol&gt; &lt;p&gt;Country use ISO3166-1 alpha-2 two letter, e.g. US.&lt;/p&gt; &lt;p&gt;Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.&lt;/p&gt; &lt;p&gt;This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute.&lt;/p&gt;
   */
  async function createUser(data: UserCreateRequestV3): Promise<UserCreateResponseV3> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUser(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;&lt;strong&gt;Special note for publisher-game scenario:&lt;/strong&gt; Game Client should provide game namespace path parameter and Publisher Client should provide publisher namespace path parameter. &lt;/p&gt; &lt;p&gt;The password reset code will be sent to the publisher account&#39;s email address. &lt;/p&gt; &lt;p&gt;action code : 10104 &lt;/p&gt;
   */
  async function createUserForgot(data: ForgotPasswordRequestV3): Promise<unknown> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserForgot(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Notes:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;This endpoint bulk get users&#39; basic info by userId, max allowed 100 at a time&lt;/li&gt; &lt;li&gt;If namespace is game, will search by game user Id, other wise will search by publisher namespace&lt;/li&gt; &lt;li&gt;&lt;strong&gt;Result will include displayName(if it exists)&lt;/strong&gt;&lt;/li&gt; &lt;/ul&gt;
   */
  async function createUserBulkBasic(data: UserIDsRequest): Promise<ListBulkUserResponse> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserBulkBasic(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * &lt;p&gt;Verify the registration code&lt;/p&gt;
   */
  async function createUserCodeVerify(data: VerifyRegistrationCode): Promise<unknown> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserCodeVerify(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Endpoint to validate user invitation. When not found, it could also means the invitation has expired.
   */
  async function getUserInvite_ByInvitationId(invitationId: string): Promise<UserInvitationV3> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getUserInvite_ByInvitationId(invitationId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This endpoint create user from saved roles when creating invitation and submitted data. User will be able to login after completing submitting the data through this endpoint. Available Authentication Types: EMAILPASSWD: an authentication type used for new user registration through email. Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29.
   */
  async function createUserInvite_ByInvitationId(
    invitationId: string,
    data: UserCreateFromInvitationRequestV3
  ): Promise<UserCreateResponseV3> {
    const $ = new UsersPublic$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createUserInvite_ByInvitationId(invitationId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    createUser,
    createUserForgot,
    createUserBulkBasic,
    createUserCodeVerify,
    getUserInvite_ByInvitationId,
    createUserInvite_ByInvitationId
  }
}
