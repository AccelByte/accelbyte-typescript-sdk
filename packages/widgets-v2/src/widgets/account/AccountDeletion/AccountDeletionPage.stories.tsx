/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { ACCOUNT_DELETION_PAGE_HANDLER } from '~/mocks/user'
import { AccountDeletionWidget } from './AccountDeletionPage'

export default {
  title: 'Widgets/AccountDeletionWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <AccountDeletionWidget />
    </AccountPageLayoutWidget>
  )
}

export const AccountDeletion = Template.bind({})
AccountDeletion.parameters = {
  msw: {
    handlers: [ACCOUNT_DELETION_PAGE_HANDLER]
  }
}
