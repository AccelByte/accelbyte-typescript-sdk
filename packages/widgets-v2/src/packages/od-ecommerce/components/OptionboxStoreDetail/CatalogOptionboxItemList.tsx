/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './CatalogOptionboxItemList.module.scss'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { WidgetLocation } from '~/hooks/routes/useHistory'

interface OptionboxItemProps {
  link: string | WidgetLocation
  thumbnail?: string
  name: string
  type: string
  quantity: number
}

const CatalogOptionboxItem = ({ link, thumbnail, name, type, quantity }: OptionboxItemProps) => (
  <Link to={link} className="catalogItem">
    <div className="catalogItemImage">
      <img src={thumbnail || defaultItemImage} loading="lazy" />
    </div>
    <div className="catalogItemDetail">
      <div className="catalogItemHeading">{name}</div>
      <div className="catalogItemType">{type}</div>
      <div className="catalogItemQty">{quantity > 1 && `x${quantity}`}</div>
    </div>
  </Link>
)

interface Props {
  items: ItemInfo[] | null
  optionboxItem: ItemInfo
}

export function CatalogOptionboxItemList({ items, optionboxItem }: Props) {
  const { state: routes } = useRoutes()
  const effectiveItems = items || []

  return (
    <div className={classNames(styles.catalogOptionboxItemList, 'catalogOptionboxItemList')}>
      <h2 className="catalogHeading">
        <Trans i18nKey="CatalogOptionboxItemList.heading">Inside The Option Box</Trans>
      </h2>
      {effectiveItems.length > 0 && (
        <div className="catalogList">
          {effectiveItems.map(item => {
            const type = item.appType || item.itemType
            const itemCoverImageUrl = item.thumbnailUrl || defaultItemImage
            return (
              <CatalogOptionboxItem
                key={item.itemId}
                link={ItemHelper.getItemDetailRoute(routes, item)}
                thumbnail={itemCoverImageUrl}
                name={item.title || item.name || ''}
                type={type}
                quantity={optionboxItem.itemQty ? optionboxItem.itemQty[item.itemId] : 1}
              />
            )
          })}
        </div>
      )}
      {effectiveItems.length === 0 && (
        <div className="catalogNoItem">
          <Trans i18nKey="CatalogOptionboxItemList.noItem">Looks like there aren't any optionbox item yet.</Trans>
        </div>
      )}
    </div>
  )
}
