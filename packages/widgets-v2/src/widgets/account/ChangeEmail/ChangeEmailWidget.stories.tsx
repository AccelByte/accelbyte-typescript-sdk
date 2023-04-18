/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ChangeEmailWidget } from './ChangeEmailWidget'

import { PROFILE_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/ChangeEmailWidget',
  component: ChangeEmailWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ChangeEmailWidget>

const Template: ComponentStory<typeof ChangeEmailWidget> = () => <ChangeEmailWidget />

export const ChangeEmail = Template.bind({})
ChangeEmail.parameters = {
  msw: {
    handlers: PROFILE_PAGE_HANDLER
  }
}
