/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HeaderWidget } from './HeaderWidget'
import './HeaderWidget.scss'

import { USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS, USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'
import { UserIcon } from '@od-components/components/Icons/UserIcon'
import { LockIcon } from '@od-components/components/Icons/LockIcon'
import { VoucherIcon } from '@od-components/components/Icons/VoucherIcon'
import { ShopBagIcon } from '@od-components/components/Icons/ShopBagIcon'

export default {
  title: 'Widgets/HeaderWidget',
  component: HeaderWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof HeaderWidget>

const Template: ComponentStory<typeof HeaderWidget> = args => <HeaderWidget {...args} />

const headerMenus = [
  {
    pathname: '/store',
    label: 'Store'
  },
  {
    pathname: '/news',
    label: 'News'
  }
]

const userDropdownMenus = [
  {
    pathname: '/account/overview',
    icon: <UserIcon />,
    label: 'My Account'
  },
  {
    pathname: '/account/redeem-code',
    icon: <VoucherIcon />,
    label: 'Redeem Code'
  },
  {
    pathname: '/account/change-password',
    icon: <LockIcon />,
    label: 'Password & Security',
    isWithDivider: true
  },
  {
    pathname: '/account/order-history',
    icon: <ShopBagIcon />,
    label: 'Order History'
  }
]

// Logged out case.
export const LoggedOut = Template.bind({})
LoggedOut.args = {
  menus: headerMenus
}
LoggedOut.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS
  }
}

// Logged in case.
export const LoggedIn = Template.bind({})
LoggedIn.args = {
  menus: headerMenus,
  userDropdownMenus
}
LoggedIn.parameters = {
  msw: {
    handlers: USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS
  }
}
