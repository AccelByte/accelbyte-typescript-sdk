/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FooterWidget } from './FooterWidget'
import { USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS } from '~/mocks/user'

export default {
  title: 'Widgets/FooterWidget',
  component: FooterWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof FooterWidget>

const Template: ComponentStory<typeof FooterWidget> = args => (
  <>
    <div className="h-[300px]" />
    <FooterWidget {...args} />
  </>
)
// Logged out case.
export const Footer = Template.bind({})
Footer.args = {
  areLinksHidden: false
}
Footer.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS
  }
}
