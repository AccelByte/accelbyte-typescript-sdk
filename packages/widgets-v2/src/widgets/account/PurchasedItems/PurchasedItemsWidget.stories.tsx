/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { PurchasedItemsWidget } from './PurchasedItemsWidget'
import { AccountPageLayoutWidget } from '../AccountPageLayoutWidget'

import { PURCHASED_ITEMS_PAGE_HANDLER } from '~/mocks/user'
import { PurchasedGames } from '@od-account/pages/PurchasedItems/PurchasedGames'
import { PurchasedOptionboxes } from '@od-account/pages/PurchasedItems/PurchasedOptionboxes'

interface StoryProps extends React.ComponentProps<typeof AccountPageLayoutWidget> {
  children: JSX.Element
}
type StoryType = (props: StoryProps) => JSX.Element

export default {
  title: 'Widgets/PurchasedItems',
  component: AccountPageLayoutWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<StoryType>

const Template: ComponentStory<StoryType> = ({ children, ...args }) => {
  return (
    <AccountPageLayoutWidget {...args}>
      <PurchasedItemsWidget>{children}</PurchasedItemsWidget>
    </AccountPageLayoutWidget>
  )
}

export const PurchasedGamesStory = Template.bind({})
PurchasedGamesStory.parameters = {
  msw: {
    handlers: [...PURCHASED_ITEMS_PAGE_HANDLER]
  }
}
PurchasedGamesStory.args = { children: <PurchasedGames /> }
PurchasedGamesStory.storyName = 'Purchased Games'

export const PurchasedOptionboxesStory = Template.bind({})
PurchasedOptionboxesStory.args = { children: <PurchasedOptionboxes page={1} /> }
PurchasedOptionboxesStory.parameters = {
  msw: {
    handlers: [...PURCHASED_ITEMS_PAGE_HANDLER]
  }
}
PurchasedOptionboxesStory.storyName = 'Purchased Optionboxes'
