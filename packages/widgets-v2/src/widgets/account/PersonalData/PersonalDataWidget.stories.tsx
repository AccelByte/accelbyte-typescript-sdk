/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { PERSONAL_DATA_PAGE_HANDLER } from '~/mocks/user'
import { PersonalDataWidget } from './PersonalDataWidget'

export default {
  title: 'Widgets/PersonalDataWidget',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof AccountPageLayoutWidget>

const Template: ComponentStory<typeof AccountPageLayoutWidget> = args => {
  return (
    <AccountPageLayoutWidget {...args}>
      <PersonalDataWidget />
    </AccountPageLayoutWidget>
  )
}

export const PersonalData = Template.bind({})
PersonalData.parameters = {
  msw: {
    handlers: [PERSONAL_DATA_PAGE_HANDLER]
  }
}
