/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TwitchDropWidget } from './TwitchDropWidget'
import { TWITCH_DROP_PAGE_HANDLER } from '~/mocks/user'

export default {
  title: 'Widgets/TwitchDropWidget',
  component: TwitchDropWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TwitchDropWidget>

const Template: ComponentStory<typeof TwitchDropWidget> = () => <TwitchDropWidget />

export const TwitchDropClaim = Template.bind({})
TwitchDropClaim.parameters = {
  msw: {
    handlers: TWITCH_DROP_PAGE_HANDLER
  }
}
