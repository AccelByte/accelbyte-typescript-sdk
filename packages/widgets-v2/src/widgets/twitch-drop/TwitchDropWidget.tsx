/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { TwitchDropPage } from '@od-twitch/pages/TwitchDropPage'
import { PrivateWidget } from '~/packages/od-account/components/PrivateWidget'

export function TwitchDropWidget() {
  return (
    <PrivateWidget>
      <TwitchDropPage />
    </PrivateWidget>
  )
}
