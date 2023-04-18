/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ChangeEmailPage } from '@od-account/pages/ChageEmail/ChangeEmailPage'
import { PrivateWidget } from '@od-account/components/PrivateWidget'

export function ChangeEmailWidget() {
  return (
    <PrivateWidget>
      <ChangeEmailPage />
    </PrivateWidget>
  )
}
