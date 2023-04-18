/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS, USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'
import { AuthCodeExchangeWidget } from './AuthCodeExchangerWidget'
import { LoginWidget } from '../login/LoginWidget'
import { UserIcon } from '@od-components/components/Icons/UserIcon'
import { HomePageWidget } from '../home/HomePageWidget'

export default {
  title: 'Widgets/AuthCodeExchangerWidget',
  component: AuthCodeExchangeWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AuthCodeExchangeWidget>

const Template: ComponentStory<typeof AuthCodeExchangeWidget> = args => {
  function Story() {
    return (
      <>
        <LoginWidget
          userDropdownMenus={[
            {
              pathname: '/account/overview',
              icon: <UserIcon />,
              label: 'My Account'
            }
          ]}
        />
      </>
    )
  }

  return (
    <>
      <Story />
      <AuthCodeExchangeWidget {...args}>
        <HomePageWidget />
      </AuthCodeExchangeWidget>
    </>
  )
}

// Logged in case.
export const LoggedIn = Template.bind({})
LoggedIn.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS
  },
  query: {
    code: '3736506120c04c95b042ad686860ff3e',
    state: { csrf: '981f5d46-3ef4-40db-a302-002fa80fad9c', payload: null }
  },
  localStorage: {
    'pp:pkce:cd': JSON.stringify({
      csrf: '981f5d46-3ef4-40db-a302-002fa80fad9c',
      codeVerifier: 'asdfweerASDFewrtf343543'
    })
  }
}

// Logged out case.
export const LoggedOut = Template.bind({})
LoggedOut.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS
  }
}
