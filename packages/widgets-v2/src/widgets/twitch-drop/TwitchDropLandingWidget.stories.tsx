/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwitchDropLandingWidget } from './TwitchDropLandingWidget'
import { TWITCH_DROP_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/TwitchDropLandingWidget',
  component: TwitchDropLandingWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TwitchDropLandingWidget>

const Template: ComponentStory<typeof TwitchDropLandingWidget> = () => <TwitchDropLandingWidget />

export const TwitchDropLanding = Template.bind({})
TwitchDropLanding.parameters = {
  msw: {
    handlers: TWITCH_DROP_PAGE_HANDLER
  }
}
