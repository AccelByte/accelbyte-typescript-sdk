/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerifyUserWidget } from './VerifyUserWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { USER_NEED_VERIFY_EMAIL_HANDLERS } from '~/mocks/user'
import { mockUser } from '@od-shared/mocks/MockVars'

export default {
  title: 'Widgets/VerifyUserWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = () => {
  return <VerifyUserWidget />
}

export const VerifyUser = Template.bind({})
VerifyUser.parameters = {
  msw: {
    handlers: [USER_NEED_VERIFY_EMAIL_HANDLERS]
  },
  query: {
    email: mockUser.emailAddress,
    success: 'true'
  }
}
