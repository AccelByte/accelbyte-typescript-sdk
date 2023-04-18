/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountOverviewWidget } from './AccountOverviewWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { ACCOUNT_OVERVIEW_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/AccountOverviewWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <AccountOverviewWidget />
    </AccountPageLayoutWidget>
  )
}

export const AccountOverview = Template.bind({})
AccountOverview.parameters = {
  msw: {
    handlers: ACCOUNT_OVERVIEW_PAGE_HANDLER
  }
}
