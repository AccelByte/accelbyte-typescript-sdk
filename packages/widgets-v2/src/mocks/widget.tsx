/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { WidgetHistory } from '~/hooks/routes/useHistory'

export const STORYBOOK_MOCK_HISTORY: WidgetHistory = {
  location: {
    hash: '',
    key: '',
    pathname: '',
    search: '',
    state: ''
  },
  push: () => null,
  replace: () => null
}

export const StorybookMockLink = <T extends { to: string }>({ to, ...props }: T) => {
  return <a href={to} {...props} />
}
