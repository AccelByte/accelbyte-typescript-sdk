/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { EventV2$ } from '@accelbyte/sdk/generated-public/event/EventV2$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class EventApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Available Type:
   *        - email
   *        - password
   *        - displayname
   *        - dateofbirth
   *        - country
   *        - language
   *
   *      Requires a valid user access token
   */
  getAccountHistoryByUserId = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: {
      pageSize?: number | undefined
      startDate?: string | null
      endDate?: string | null
      offset?: number | undefined
      type?: string | null
    }
  }) => {
    return this.newInstance().fetchEventV2NsUsersByUseridEdithistory(userId, queryParams)
  }

  private newInstance() {
    return new EventV2$(Network.create(this.conf), this.namespace, this.cache)
  }
}
