/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OrderHistoryWidget } from './OrderHistoryWidget'
import { OrderHistoryDetailWidget } from './OrderHistoryDetailWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { PROFILE_PAGE_HANDLER } from '~/mocks/user'
import { mockSingleOrder } from '@od-shared/mocks/MockVars'
import { ORDER_HISTORY_HANDLERS, STORE_ITEM_HANDLERS } from '~/mocks/platform'

export default {
  title: 'Widgets/OrderHistoryWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

// Order history.
export const OrderHistory: ComponentStory<typeof AccountPageLayoutWidget> = () => {
  return (
    <AccountPageLayoutWidget>
      <OrderHistoryWidget page={1} />
    </AccountPageLayoutWidget>
  )
}

OrderHistory.parameters = {
  msw: {
    handlers: [...PROFILE_PAGE_HANDLER, ...STORE_ITEM_HANDLERS, ...ORDER_HISTORY_HANDLERS]
  },
  args: {
    element: <OrderHistoryWidget page={1} />
  }
}

// Order history detail.
export const OrderHistoryDetail: ComponentStory<typeof AccountPageLayoutWidget> = () => {
  return (
    <AccountPageLayoutWidget>
      <OrderHistoryDetailWidget orderNo={mockSingleOrder.orderNo} />
    </AccountPageLayoutWidget>
  )
}

OrderHistoryDetail.parameters = {
  msw: {
    handlers: [...PROFILE_PAGE_HANDLER, ...STORE_ITEM_HANDLERS, ...ORDER_HISTORY_HANDLERS]
  },
  args: {
    element: <OrderHistoryDetailWidget orderNo={mockSingleOrder.orderNo} />
  }
}
