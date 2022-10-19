/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { EventV2$ } from '@od-web-sdk/generated-public/event/EventV2$'
import { Network } from '@od-web-sdk/utils/Network'

export class EventApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new EventV2$(Network.create(this.conf), this.namespace, this.cache)
  }

  getAccountHistoryByUserId = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: {
      pageSize?: number | null
      startDate?: string | null
      endDate?: string | null
      offset?: number | null
      type?: string | null
    }
  }) => {
    return this.newInstance().fetchEventV2UsersByUseridEdithistory(userId, queryParams)
  }
}
