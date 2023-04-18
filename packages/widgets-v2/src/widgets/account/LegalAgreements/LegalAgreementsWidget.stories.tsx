/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { LEGAL_AGREEMENTS_PAGE_HANDLER } from '~/mocks/user'
import { LegalAgreementsWidget } from './LegalAgreementsWidget'

export default {
  title: 'Widgets/LegalAgreementsWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <LegalAgreementsWidget />
    </AccountPageLayoutWidget>
  )
}

export const LegalAgreements = Template.bind({})
LegalAgreements.parameters = {
  msw: {
    handlers: [LEGAL_AGREEMENTS_PAGE_HANDLER]
  }
}
