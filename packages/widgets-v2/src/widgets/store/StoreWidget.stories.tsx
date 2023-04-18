/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StoreWidget } from './StoreWidget'

import { USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS } from '~/mocks/user'
import { STORE_ITEM_HANDLERS } from '~/mocks/platform'
import { SingleGameStoreWrapper } from '~/widgets/store/StoreEntry/SingleGameStoreWrapper'
import { SingleGameAppStore } from '@od-ecommerce/components/AppStore/AppStore'
import { ItemType } from '@od-shared/models/EcommTypes'
import { SingleGameBundleStore } from '@od-ecommerce/components/BundleStore/BundleStore'
import { SingleGameOptionboxStore } from '@od-ecommerce/components/OptionboxStore/OptionboxStore'
import { GameIcon } from '@od-components/components/Icons/GameIcon'
import { Trans } from 'react-i18next'
import { BundleIcon } from '@od-components/components/Icons/BundleIcon'
import { OptionboxIcon } from '@od-components/components/Icons/OptionboxIcon'
import { MultipleGameStore } from '~/widgets/store/StoreEntry/MultipleGameStore'
import { ProductKeyIcon } from '@od-components/components/Icons/ProductKeyIcon'
import { AppStoreDetail } from '~/widgets/store/AppStoreDetail/AppStoreDetail'
import { IngameItemStoreDetail } from '~/widgets/store/IngameItemStoreDetail/IngameItemStoreDetail'
import { OptionboxStoreDetail } from '~/widgets/store/OptionboxStoreDetail/OptionboxStoreDetail'
import { MockStoreVars } from '@od-shared/mocks/MockVars.store'
import { CodeStoreDetail } from '~/widgets/store/CodeStoreDetail/CodeStoreDetail'
import { z } from 'zod'
import { DlcStoreDetail } from '~/widgets/store/DlcStoreDetail/DlcStoreDetail'
import { StoreEntry as StoreEntryComponent } from './StoreEntry/StoreEntry'
import { SingleGameStore } from './StoreEntry/SingleGameStore'
import { TemplateConfig } from '@accelbyte/sdk-odinconfig'
import { ItemInfo } from '@accelbyte/sdk-platform'

const StoreTypeEnum = z.enum([
  ItemType.enum.APP,
  ItemType.enum.BUNDLE,
  ItemType.enum.INGAMEITEM,
  ItemType.enum.CODE,
  ItemType.enum.OPTIONBOX,
  'DLC'
])

type StoreWidgetStoryProps = (
  props: React.ComponentProps<typeof StoreWidget> & {
    singleGameItemType: z.infer<typeof StoreTypeEnum>
    multipleGameItemType: z.infer<typeof StoreTypeEnum>
  }
) => JSX.Element

// Story definitions.
export default {
  title: 'Widgets/StoreWidget',
  component: StoreWidget,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<StoreWidgetStoryProps>

export const StoreEntry: ComponentStory<StoreWidgetStoryProps> = ({ singleGameItemType, multipleGameItemType }, context) => {
  function Story() {
    // This needs to be "wrapped" otherwise Storybook will hang when we navigate with controls.
    if (context.globals.templateConfig === TemplateConfig.SINGLE) {
      return (
        <SingleGameStore
          tabLinks={[
            {
              icon: <GameIcon className="icon" />,
              label: <Trans i18nKey="AppDetailPage.dlcStore.heading">Expansions</Trans>,
              link: '#',
              className: singleGameItemType === StoreTypeEnum.enum.APP ? 'active' : ''
            },
            {
              icon: <BundleIcon className="icon" />,
              label: <Trans i18nKey="AppDetailPage.inAppStore.heading">Game Store</Trans>,
              link: '#',
              className: singleGameItemType === StoreTypeEnum.enum.BUNDLE ? 'active' : ''
            },
            {
              icon: <OptionboxIcon className="m-2" />,
              label: <Trans i18nKey="StorePage.tabs.optionbox">Optionbox</Trans>,
              link: '#',
              className: singleGameItemType === StoreTypeEnum.enum.OPTIONBOX ? 'active' : ''
            }
          ]}>
          <SingleGameStoreWrapper>
            {({ baseItem }) => {
              return <SingleGameStoreTabContent baseItem={baseItem} singleGameItemType={singleGameItemType} />
            }}
          </SingleGameStoreWrapper>
        </SingleGameStore>
      )
    }

    // Multiple game.
    return (
      <MultipleGameStore
        tabLinks={[
          {
            icon: <GameIcon className="m-2" />,
            link: '#',
            label: <Trans i18nKey="StorePage.tabs.apps">Games</Trans>,
            className: multipleGameItemType === StoreTypeEnum.enum.APP ? 'active' : ''
          },
          {
            icon: <BundleIcon className="m-2" />,
            link: '#',
            label: <Trans i18nKey="StorePage.tabs.bundles">Bundles</Trans>,
            className: multipleGameItemType === StoreTypeEnum.enum.BUNDLE ? 'active' : ''
          },
          {
            icon: <ProductKeyIcon className="m-2" />,
            link: '#',
            label: <Trans i18nKey="StorePage.tabs.productKeys">Product Keys</Trans>,
            className: multipleGameItemType === StoreTypeEnum.enum.CODE ? 'active' : ''
          },
          {
            icon: <OptionboxIcon className="m-2" />,
            link: '#',
            label: <Trans i18nKey="StorePage.tabs.optionbox">Optionbox</Trans>,
            className: multipleGameItemType === StoreTypeEnum.enum.OPTIONBOX ? 'active' : ''
          }
        ]}>
        <MultipleGameStoreTabContent multipleGameItemType={multipleGameItemType} />
      </MultipleGameStore>
    )
  }

  return (
    <StoreWidget>
      <StoreEntryComponent>
        <Story />
      </StoreEntryComponent>
    </StoreWidget>
  )
}
StoreEntry.parameters = {
  msw: {
    handlers: [...USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS, ...STORE_ITEM_HANDLERS]
  }
}
StoreEntry.argTypes = {
  singleGameItemType: {
    options: [StoreTypeEnum.enum.APP, StoreTypeEnum.enum.BUNDLE, StoreTypeEnum.enum.OPTIONBOX],
    control: { type: 'radio' },
    defaultValue: StoreTypeEnum.enum.APP,
    if: {
      global: 'templateConfig',
      eq: TemplateConfig.SINGLE
    }
  },
  multipleGameItemType: {
    options: [StoreTypeEnum.enum.APP, StoreTypeEnum.enum.BUNDLE, StoreTypeEnum.enum.CODE, StoreTypeEnum.enum.OPTIONBOX],
    control: { type: 'radio' },
    defaultValue: ItemType.enum.APP,
    if: {
      global: 'templateConfig',
      eq: TemplateConfig.MULTIPLE
    }
  }
}

// Story detail.
export const StoreDetail: ComponentStory<StoreWidgetStoryProps> = ({ singleGameItemType, multipleGameItemType }, context) => {
  function Story() {
    // This needs to be "wrapped" otherwise Storybook will hang when we navigate with controls.
    if (context.globals.templateConfig === TemplateConfig.SINGLE) {
      switch (singleGameItemType) {
        case StoreTypeEnum.enum.APP: {
          return <AppStoreDetail itemId={MockStoreVars.TEST_ITEM_ID} />
        }
        case StoreTypeEnum.enum.DLC: {
          return <DlcStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_DLC} />
        }
        case StoreTypeEnum.enum.INGAMEITEM: {
          return <IngameItemStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_INGAMEITEM} />
        }
        case StoreTypeEnum.enum.OPTIONBOX: {
          return <OptionboxStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_OPTIONBOX} />
        }
      }
    }

    switch (multipleGameItemType) {
      case StoreTypeEnum.enum.APP: {
        return <AppStoreDetail itemId={MockStoreVars.TEST_ITEM_ID} />
      }
      case StoreTypeEnum.enum.DLC: {
        return <DlcStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_DLC} />
      }
      case StoreTypeEnum.enum.INGAMEITEM: {
        return <IngameItemStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_INGAMEITEM} />
      }
      case StoreTypeEnum.enum.OPTIONBOX: {
        return <OptionboxStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_OPTIONBOX} />
      }
      case StoreTypeEnum.enum.CODE: {
        return <CodeStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_CODE} />
      }
    }

    return null
  }

  return <Story />
}
StoreDetail.parameters = {
  msw: {
    handlers: [...USER_AND_USER_PROFILES_UNAUTHORIZED_HANDLERS, ...STORE_ITEM_HANDLERS]
  }
}
StoreDetail.argTypes = {
  singleGameItemType: {
    options: [StoreTypeEnum.enum.APP, StoreTypeEnum.enum.DLC, StoreTypeEnum.enum.INGAMEITEM, StoreTypeEnum.enum.OPTIONBOX],
    control: { type: 'radio' },
    defaultValue: StoreTypeEnum.enum.APP,
    if: {
      global: 'templateConfig',
      eq: TemplateConfig.SINGLE
    }
  },
  multipleGameItemType: {
    options: [
      StoreTypeEnum.enum.APP,
      StoreTypeEnum.enum.DLC,
      StoreTypeEnum.enum.INGAMEITEM,
      StoreTypeEnum.enum.CODE,
      StoreTypeEnum.enum.OPTIONBOX
    ],
    control: { type: 'radio' },
    defaultValue: StoreTypeEnum.enum.APP,
    if: {
      global: 'templateConfig',
      eq: TemplateConfig.MULTIPLE
    }
  }
}

// Composing functions.
function SingleGameStoreTabContent({
  singleGameItemType,
  baseItem
}: {
  singleGameItemType: z.infer<typeof StoreTypeEnum>
  baseItem: ItemInfo | null
}) {
  switch (singleGameItemType) {
    case StoreTypeEnum.enum.APP: {
      return <SingleGameAppStore baseItem={baseItem} />
    }
    case StoreTypeEnum.enum.BUNDLE: {
      return <SingleGameBundleStore baseItem={baseItem} />
    }
    case StoreTypeEnum.enum.OPTIONBOX: {
      return <SingleGameOptionboxStore baseItem={baseItem} />
    }
  }

  return null
}

function MultipleGameStoreTabContent({ multipleGameItemType }: { multipleGameItemType: z.infer<typeof StoreTypeEnum> }) {
  switch (multipleGameItemType) {
    case StoreTypeEnum.enum.APP: {
      return <AppStoreDetail itemId={MockStoreVars.TEST_ITEM_ID} />
    }
    case StoreTypeEnum.enum.DLC: {
      return <DlcStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_DLC} />
    }
    case StoreTypeEnum.enum.INGAMEITEM: {
      return <IngameItemStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_INGAMEITEM} />
    }
    case StoreTypeEnum.enum.OPTIONBOX: {
      return <OptionboxStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_OPTIONBOX} />
    }
    case StoreTypeEnum.enum.CODE: {
      return <CodeStoreDetail itemId={MockStoreVars.TEST_ITEM_ID_CODE} />
    }
  }

  return null
}
