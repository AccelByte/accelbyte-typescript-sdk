/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { RedeemCodeWidget } from './RedeemCodeWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { REDEEM_CODE_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/RedeemCodeWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <RedeemCodeWidget />
    </AccountPageLayoutWidget>
  )
}

export const RedeemCode = Template.bind({})
RedeemCode.parameters = {
  msw: {
    handlers: REDEEM_CODE_PAGE_HANDLER
  }
}
