/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { ItemPublishingContent, UniversalMedia, UniversalMediaType } from '@od-shared/models/Cms'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import defaultItemImage from '@od-assets/images/default-item-banner.svg'
import classNames from 'classnames'
import React from 'react'
import ReactPlayer from 'react-player'
import styles from './CatalogItemBanner.module.scss'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  item: ItemInfo
  itemPublishingContent: ItemPublishingContent | null
  isPreviewMode?: boolean
  children?: React.ReactNode
}

const renderBannerMedia = (itemMedia: UniversalMedia) => {
  switch (itemMedia.type) {
    case UniversalMediaType.YOUTUBE_VIDEO:
    case UniversalMediaType.URL_VIDEO:
      return (
        <div className="banner-video-wrapper">
          <ReactPlayer
            key={itemMedia.content}
            className="media react-player"
            controls={false}
            url={itemMedia.content}
            playing={true}
            loop={true}
            volume={0}
          />
        </div>
      )
    default:
      return <img key={itemMedia.content} alt={itemMedia.content} src={itemMedia.content} className="media" loading="lazy" />
  }
}

export const CatalogItemBanner = (props: Props) => {
  const { item, itemPublishingContent, isPreviewMode, children } = props
  const { state } = useDiscoveryConfigs()

  const title = item.title
  const description = item.description || ''
  const isSingleGame = state.isSingleGame || isPreviewMode

  return (
    <div className={styles.catalogItemBanner}>
      {itemPublishingContent &&
      itemPublishingContent.mainBackground &&
      itemPublishingContent.mainBackground.content &&
      UrlUtils.isValidUrl(itemPublishingContent.mainBackground.content) ? (
        renderBannerMedia(itemPublishingContent.mainBackground)
      ) : (
        <img
          className="media"
          src={ItemHelper.getFilteredImageUrlByTag(item.images, ItemImageTag.productBanner) || defaultItemImage}
          alt={''}
        />
      )}
      <div
        className="media overlay"
        style={{
          backgroundImage: `radial-gradient(736.50px at 50% 50%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.73) 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        {!isSingleGame && (
          <div className="bannerContainer">
            <div className="bannerUpperSpace">{children}</div>
            <div className="bannerContent">
              <h1 className="bannerTitle">{title}</h1>
              <div className="bannerDescription">{description}</div>
              <div className={classNames(styles.separator)} />
            </div>
          </div>
        )}
        {isSingleGame && (
          <div className="bannerContainer" style={{ justifyContent: 'center' }}>
            <div className="bannerContent">
              <h1 className="bannerTitle">{title}</h1>
              <div className="bannerDescription">{description}</div>
              <div>{children}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
