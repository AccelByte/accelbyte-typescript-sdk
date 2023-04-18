/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { AccountPageLayout, AccountPageLayoutProps } from '@od-account/components/AccountPageLayout'
import { PrivateWidget } from '@od-account/components/PrivateWidget'

export function AccountPageLayoutWidget(props: Omit<AccountPageLayoutProps, 'isPreviewMode'>) {
  return (
    <PrivateWidget>
      <AccountPageLayout {...props} />
    </PrivateWidget>
  )
}
