/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginWidget } from './LoginWidget'
import './LoginWidget.scss'

import { USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS, USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'

export default {
  title: 'Widgets/LoginWidget',
  component: LoginWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof LoginWidget>

const Template: ComponentStory<typeof LoginWidget> = args => <LoginWidget {...args} />

// Logged out case.
export const LoggedOut = Template.bind({})
LoggedOut.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS
  }
}

// Logged in case.
export const LoggedIn = Template.bind({})
LoggedIn.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS
  }
}
