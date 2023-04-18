/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemPublishingContent, UniversalMedia } from '@od-shared/models/Cms'
import { Image, ItemInfo } from '@accelbyte/sdk-platform'
import { ImageMediumCodec, Medium, MediumHelper, YoutubeVideoMediumCodec } from '@od-medium-serde'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { AppType, ItemType } from '@od-shared/models/EcommTypes'
import { AllWidgetRoutesWithPathMaker } from '~/utils/RouteUtils'
import { WidgetLocation } from '~/hooks/routes/useHistory'

export const ItemImageTag = Object.freeze({
  heroBanner: 'hero-banner',
  featured: 'featured',
  screenshot: 'screenshot',
  productCover: 'product-cover',
  productBanner: 'product-banner'
})

export class ItemHelper {
  static getScreenshotImages(itemImages: Image[]): Image[] {
    return itemImages.filter(itemImages => itemImages.as === ItemImageTag.screenshot)
  }

  static getMedia = (item: ItemInfo | null, itemPublishingContent: ItemPublishingContent | null): UniversalMedia[] | Medium[] | null => {
    if (itemPublishingContent && itemPublishingContent.medias && itemPublishingContent.medias.length > 0) {
      return itemPublishingContent.medias
    }
    if (item?.images) {
      const media: Medium[] = []
      const rawItemMedia = ItemHelper.getScreenshotImages(item.images)
      rawItemMedia.forEach(rawItemMedium => {
        const [medium, error] = MediumHelper.fromRaw(rawItemMedium)
        if (!error && medium) media.push(medium)
      })
      return [
        ...media.filter(item => YoutubeVideoMediumCodec.safeParse(item).success),
        ...media.filter(item => ImageMediumCodec.safeParse(item).success)
      ]
    }
    return null
  }

  static getFilteredImageUrlByTag(images: Image[] | null | undefined, tag: string) {
    if (!images) return undefined
    const filteredImage = images.find(image => image.as === tag && !!UrlUtils.isValidUrl(image.imageUrl))
    return filteredImage ? filteredImage.imageUrl : undefined
  }

  static getItemDetailRoute = (routes: AllWidgetRoutesWithPathMaker, item: ItemInfo): WidgetLocation | string => {
    const itemId = item.itemId
    if (item.appType === AppType.enum.DLC) {
      return routes.store.dlcs.detail.makePath({ params: { itemId } })
    }

    switch (item.itemType) {
      case ItemType.enum.APP:
        return routes.store.apps.detail.makePath({ params: { itemId } })
      case ItemType.enum.BUNDLE:
        return routes.store.bundles.detail.makePath({ params: { itemId } })
      case ItemType.enum.CODE:
        return routes.store.codes.detail.makePath({ params: { itemId } })
      case ItemType.enum.OPTIONBOX:
        return routes.store.optionboxes.detail.makePath({ params: { itemId } })
      case ItemType.enum.INGAMEITEM:
        return routes.store.ingameitems.detail.makePath({ params: { itemId } })
    }
    return ''
  }
}
