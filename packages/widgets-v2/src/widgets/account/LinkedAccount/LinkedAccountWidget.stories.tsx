/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkedAccountsWidget } from './LinkedAccountWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { LINKED_ACCOUNT_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/LinkedAccountsWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <LinkedAccountsWidget />
    </AccountPageLayoutWidget>
  )
}

export const LinkedAccount = Template.bind({})
LinkedAccount.parameters = {
  msw: {
    handlers: [LINKED_ACCOUNT_PAGE_HANDLER]
  }
}
