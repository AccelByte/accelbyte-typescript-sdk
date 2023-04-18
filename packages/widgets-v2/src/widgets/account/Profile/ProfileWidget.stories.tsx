/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileWidget } from './ProfileWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { PROFILE_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/ProfileWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <ProfileWidget />
    </AccountPageLayoutWidget>
  )
}

export const Profile = Template.bind({})
Profile.parameters = {
  msw: {
    handlers: PROFILE_PAGE_HANDLER
  }
}
