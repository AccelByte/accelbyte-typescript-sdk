/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { ACCOUNT_DELETION_PAGE_HANDLER } from '~/mocks/user'
import { AccountDeletionSuccessWidget } from './AccountDeletionSuccessPage'

export default {
  title: 'Widgets/AccountDeletionSuccessWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = () => {
  return <AccountDeletionSuccessWidget />
}

export const AccountDeletionSuccess = Template.bind({})
AccountDeletionSuccess.parameters = {
  msw: {
    handlers: [ACCOUNT_DELETION_PAGE_HANDLER]
  }
}
