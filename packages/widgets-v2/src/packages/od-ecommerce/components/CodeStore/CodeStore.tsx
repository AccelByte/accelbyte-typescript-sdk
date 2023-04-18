/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { StoreConstants } from '@od-ecommerce/constants/StoreConstants'
import { ItemType } from '@od-shared/models/EcommTypes'
import React from 'react'
import { createStoreForItemsStore } from '~/hooks/platform/useStoreItems'
import { BaseStore, ExposedBaseStoreProps } from '../BaseStore/BaseStore'

// Multiple game.
const store = createStoreForItemsStore()

export const CodeStore = ({ pageSize = StoreConstants.MULTIPLE_GAME_STORE_PAGE_SIZE, ...props }: ExposedBaseStoreProps) => (
  <BaseStore {...props} itemType={ItemType.Enum.CODE} store={store} />
)
