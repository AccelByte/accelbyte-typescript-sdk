/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import './ItemList.scss'
import { Typography } from '@od-components/components/Typography/Typography'
import DropImage from '@od-assets/images/drop-image.png'
import { CardItemInfo } from '../../../models/CardItemInfo'
import classNames from 'classnames'

interface Props {
  items: CardItemInfo[]
  isMultipleGame?: boolean
  isPreviewMode?: boolean
}

export function ItemList({ items, isMultipleGame, isPreviewMode }: Props) {
  return (
    <div className={classNames('itemListContainer', isPreviewMode ? 'inPreview' : '')}>
      <div className={classNames('itemsRow', isPreviewMode ? 'inPreview' : '')}>
        {items.map((item, index) => (
          <div key={index}>
            <div className={classNames('cardItem', isMultipleGame ? 'multipleGame' : '')}>
              <div className="itemImageContainer">
                <img src={item.imageUrl || DropImage} className="m-auto w-3/4" alt="drop-image" />
              </div>
              <div className="itemName">
                <Typography tag="h3" className="text-3xl font-medium">
                  {item.name || 'Item Name'}
                </Typography>
              </div>
              <div className="h-auto">
                <Typography tag="p">Claimed</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
