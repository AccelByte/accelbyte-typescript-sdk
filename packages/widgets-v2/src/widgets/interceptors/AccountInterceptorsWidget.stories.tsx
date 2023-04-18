/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  USER_BLOCKED_BY_DELETION_STATUS_HANDLERS,
  USER_BLOCKED_BY_LEGAL_HANDLERS,
  USER_BLOCKED_BY_TWO_FA_HANDLERS,
  USER_FETCH_NETWORK_ERROR_HANDLERS,
  USER_FETCH_SERVER_ERROR_HANDLERS,
  USER_IS_HEADLESS_ACCOUNT,
  USER_NEED_VERIFY_EMAIL_HANDLERS
} from '~/mocks/user'
import { AccountInterceptorsWidget } from './AccountInterceptorsWidget'
import { HomePageWidget } from '../home/HomePageWidget'
import { AuthCodeExchangeWidget } from './AuthCodeExchangerWidget'

export default {
  title: 'Widgets/AccountInterceptorsWidget',
  component: AccountInterceptorsWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountInterceptorsWidget>

const Template: ComponentStory<typeof AccountInterceptorsWidget> = args => {
  return (
    <>
      <AccountInterceptorsWidget {...args}>
        <AuthCodeExchangeWidget>
          <HomePageWidget />
        </AuthCodeExchangeWidget>
      </AccountInterceptorsWidget>
    </>
  )
}

// User fetch server error case.
export const UserFetchServerError = Template.bind({})
UserFetchServerError.parameters = {
  msw: {
    handlers: USER_FETCH_SERVER_ERROR_HANDLERS
  }
}

// User fetch network error case.
export const UserFetchNetworkError = Template.bind({})
UserFetchNetworkError.parameters = {
  msw: {
    handlers: USER_FETCH_NETWORK_ERROR_HANDLERS
  }
}

// User is headless account case.
export const UserIsHeadlessAccount = Template.bind({})
UserIsHeadlessAccount.parameters = {
  msw: {
    handlers: USER_IS_HEADLESS_ACCOUNT
  }
}

// User need to input Two FA case.
export const UserBlockedByTwoFA = Template.bind({})
UserBlockedByTwoFA.parameters = {
  msw: {
    handlers: USER_BLOCKED_BY_TWO_FA_HANDLERS
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

// User blocked by legal case.
export const UserBlockedByLegal = Template.bind({})
UserBlockedByLegal.parameters = {
  msw: {
    handlers: USER_BLOCKED_BY_LEGAL_HANDLERS
  }
}

// User blocked by deletion status case.
export const UserBlockedByDeletionStatus = Template.bind({})
UserBlockedByDeletionStatus.parameters = {
  msw: {
    handlers: USER_BLOCKED_BY_DELETION_STATUS_HANDLERS
  }
}

// User need verify email case.
export const UserNeedVerifyEmail = Template.bind({})
UserNeedVerifyEmail.parameters = {
  msw: {
    handlers: USER_NEED_VERIFY_EMAIL_HANDLERS
  }
}
