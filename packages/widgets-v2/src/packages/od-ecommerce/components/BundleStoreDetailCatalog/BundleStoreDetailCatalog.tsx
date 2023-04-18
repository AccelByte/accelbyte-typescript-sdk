/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { EcomPath } from '@od-shared/routes/EcomPath'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './BundleStoreDetailCatalog.module.scss'

interface BundleItemProps {
  link: string
  thumbnail?: string
  name: string
  type: string
  quantity: number
}

const CatalogBundleItem = ({ link, thumbnail, name, type, quantity }: BundleItemProps) => (
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
  bundleItem: ItemInfo
}

export function BundleStoreDetailCatalog({ bundleItem, items }: Props) {
  const effectiveItems = items || []

  return (
    <div className={classNames(styles.catalogBundleItemList, 'catalogBundleItemList')}>
      <h2 className="catalogHeading">
        <Trans i18nKey="BundleStoreDetailCatalog.heading">Inside the Bundle</Trans>
      </h2>
      {effectiveItems.length > 0 && (
        <div className="catalogList">
          {effectiveItems.map(item => {
            const type = item.appType || item.itemType
            const itemCoverImageUrl = ItemHelper.getFilteredImageUrlByTag(item.images, ItemImageTag.productCover) || defaultItemImage
            return (
              <CatalogBundleItem
                key={item.itemId}
                link={EcomPath.getItemDetailRoute(item)}
                thumbnail={itemCoverImageUrl}
                name={item.title || item.name || ''}
                type={type}
                quantity={bundleItem.itemQty ? bundleItem.itemQty[item.itemId] : 1}
              />
            )
          })}
        </div>
      )}
      {effectiveItems.length === 0 && (
        <div className="catalogNoItem">
          <Trans i18nKey="BundleStoreDetailCatalog.noItem">Looks like there aren't any bundles for this game yet.</Trans>
        </div>
      )}
    </div>
  )
}
