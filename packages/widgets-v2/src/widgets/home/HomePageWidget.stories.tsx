/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomePageWidget } from './HomePageWidget'
import { USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'
import { STORE_ITEM_HANDLERS } from '~/mocks/platform'

export default {
  title: 'Widgets/HomePageWidget',
  component: HomePageWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof HomePageWidget>

const Template: ComponentStory<typeof HomePageWidget> = () => <HomePageWidget />

export const Homepage = Template.bind({})
Homepage.parameters = {
  msw: {
    handlers: [...USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS, ...STORE_ITEM_HANDLERS]
  }
}
