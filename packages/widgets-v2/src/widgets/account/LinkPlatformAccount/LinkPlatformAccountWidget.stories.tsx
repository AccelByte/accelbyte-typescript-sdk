/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LinkPlatformAccountWidget } from './LinkPlatformAccountWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'

export default {
  title: 'Widgets/LinkPlatformAccountWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = () => {
  return <LinkPlatformAccountWidget />
}

export const LinkPlatformAccount = Template.bind({})
LinkPlatformAccount.parameters = {
  msw: {
    handlers: [USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS]
  },
  query: {
    alreadyLinked: 'false',
    clientId: '2d8d4ff89ccc',
    linkingToken: '3b0e74c58bd',
    platformId: 'epicgames'
  }
}
