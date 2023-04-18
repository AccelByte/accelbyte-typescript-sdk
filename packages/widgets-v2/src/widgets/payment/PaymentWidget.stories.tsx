/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PaymentWidget as PaymentWidgetComponent } from './PaymentWidget'

import { USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS } from '~/mocks/user'
import { ORDER_HISTORY_HANDLERS } from '~/mocks/platform'
import { MockPaymentVars } from '@od-shared/mocks/MockVars.payment'

export default {
  title: 'Widgets/PaymentWidget',
  component: PaymentWidgetComponent,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof PaymentWidgetComponent>

const Template: ComponentStory<typeof PaymentWidgetComponent> = args => <PaymentWidgetComponent {...args} />

export const OrderExpired = Template.bind({})
OrderExpired.parameters = {
  msw: {
    handlers: [...USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS, ...ORDER_HISTORY_HANDLERS]
  }
}
OrderExpired.args = {
  paymentOrderNo: MockPaymentVars.ExpiredOrder.orderNo,
  namespace: 'accelbyte'
}

export const OrderNotExpired = Template.bind({})
OrderNotExpired.parameters = {
  msw: {
    handlers: [...USER_AND_USER_PROFILES_AUTHORIZED_HANDLERS, ...ORDER_HISTORY_HANDLERS]
  }
}
OrderNotExpired.args = {
  paymentOrderNo: MockPaymentVars.ActiveOrder.orderNo,
  namespace: 'accelbyte'
}
