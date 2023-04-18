/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { getYoutubeHqThumbnailUrl } from '@od-components/utils/HtmlUtils'
import { UniversalMedia, UniversalMediaType } from '@od-shared/models/Cms'
import { UniversalMediaHelper } from '@od-shared/utils/UniversalMediaHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { ImageMediumCodec, Medium, YoutubeVideoMediumCodec } from '@od-medium-serde'
import React, { useEffect, useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './AppDetailGallery.scss'

// TODO: Fix default import error on remix
// Workarround to fix default import on remix because remix transform our widget to cjs
// and return default import UI Library to object instead of function
const ReactSlick = typeof Slider === 'object' ? (Slider as any).default : Slider

export type ItemMedias = UniversalMedia[] | Medium[]

interface Props {
  itemMedias: ItemMedias
  openLightbox: (index: number) => void
}

interface State {
  lastMousePos: number | null
  isSliderEnabled: boolean
}

const SLIDER_SETTING = {
  dots: false,
  infinite: true,
  speed: 500,
  variableWidth: true,
  swipe: true,
  arrows: false,
  touchThreshold: 100,
  swipeToSlide: true,
  initialSlide: 0,
  slidesToShow: 4
}

export function AppDetailGallery({ itemMedias, openLightbox }: Props) {
  const [state, setState] = useState<State>({
    lastMousePos: null,
    isSliderEnabled: false
  })
  const sliderRef = useRef<Slider | null>(null)

  useEffect(() => {
    function setIsSliderEnabled() {
      const mediaWidth = 288
      const sidebarWidth = 260
      const totalMediaWidth = mediaWidth * itemMedias.length
      setState(oldState => ({ ...oldState, isSliderEnabled: totalMediaWidth > window.innerWidth - sidebarWidth }))
    }

    setIsSliderEnabled()
    window.addEventListener('resize', setIsSliderEnabled)

    return () => {
      window.removeEventListener('resize', setIsSliderEnabled)
    }
  }, [itemMedias.length])

  const onClickPrev = () => {
    const node = sliderRef.current
    if (node) node.slickPrev()
  }

  const onClickNext = () => {
    const node = sliderRef.current
    if (node) node.slickNext()
  }

  const onMouseDown = (ev: React.MouseEvent) => {
    setState(oldState => ({ ...oldState, lastMousePos: ev.clientX }))
  }

  const handlerOpenLightbox = (index: number) => {
    return (ev: React.MouseEvent) => {
      if (ev.clientX === state.lastMousePos && openLightbox) openLightbox(index)
    }
  }

  const renderItemImage = (itemMedia: Medium, index: number) => {
    let imageSrc = defaultItemImage
    const parsedYoutubeVideoMedium = YoutubeVideoMediumCodec.safeParse(itemMedia)
    const parsedImageMedium = ImageMediumCodec.safeParse(itemMedia)
    if (parsedYoutubeVideoMedium.success) {
      imageSrc = getYoutubeHqThumbnailUrl(parsedYoutubeVideoMedium.data.value.youtubeId)
    } else if (parsedImageMedium.success) {
      imageSrc = parsedImageMedium.data.value.imageUrl
    }
    return (
      <div key={index} className="imageContainer" onMouseDown={onMouseDown} onMouseUp={handlerOpenLightbox(index)}>
        <img src={imageSrc} loading="lazy" />
        <div className="overlayImage" />
      </div>
    )
  }

  const renderUniversalMediaImage = (itemMedia: UniversalMedia, index: number) => {
    const imageUrl = UniversalMediaHelper.getMediaScreenshot(itemMedia)
    return (
      <div key={index} className="imageContainer" onMouseDown={onMouseDown} onMouseUp={handlerOpenLightbox(index)}>
        {itemMedia.type === UniversalMediaType.URL_VIDEO && <video src={itemMedia.content} width={288} />}
        {itemMedia.type !== UniversalMediaType.URL_VIDEO && <img src={imageUrl || defaultItemImage} loading="lazy" />}
        <div className="overlayImage" />
      </div>
    )
  }

  const { isSliderEnabled } = state

  if (!itemMedias.length) return null
  const isUniversalMedia = isMediaUniversal(itemMedias)

  return (
    <div className="appDetailGalleryContainer">
      <div className="galleryDesktop">
        {isSliderEnabled ? (
          <div className="galleryWithSlider">
            <ReactSlick {...SLIDER_SETTING} ref={sliderRef} className="sliderContainer">
              {isUniversalMedia && (itemMedias as UniversalMedia[]).map(renderUniversalMediaImage)}
              {!isUniversalMedia && (itemMedias as Medium[]).map(renderItemImage)}
            </ReactSlick>
            <button className="btnPrev" onClick={onClickPrev}>
              <ArrowIcon className={classNames(ArrowIconStyles.left, 'p-3')} />
            </button>
            <button className="btnNext" onClick={onClickNext}>
              <ArrowIcon className={classNames(ArrowIconStyles.right, 'p-3')} />
            </button>
          </div>
        ) : (
          <>
            {isUniversalMedia && (itemMedias as UniversalMedia[]).map(renderUniversalMediaImage)}
            {!isUniversalMedia && (itemMedias as Medium[]).map(renderItemImage)}
          </>
        )}
      </div>
      <div className="galleryMobile">
        {itemMedias.length > 4 && (
          <React.Fragment>
            {isUniversalMedia && (itemMedias as UniversalMedia[]).slice(0, 4).map(renderUniversalMediaImage)}
            {!isUniversalMedia && (itemMedias as Medium[]).slice(0, 4).map(renderItemImage)}
            <div className="btnSeeMore" onClick={() => openLightbox(0)}>
              <Trans i18nKey="AppDetailGallery.seeMoreScreenshot">See more screenshots</Trans>
            </div>
          </React.Fragment>
        )}
        {isUniversalMedia && itemMedias.length <= 4 && (itemMedias as UniversalMedia[]).map(renderUniversalMediaImage)}
        {!isUniversalMedia && itemMedias.length <= 4 && (itemMedias as Medium[]).map(renderItemImage)}
      </div>
    </div>
  )
}

// Helper functions.
const isMediaUniversal = (itemMedias: ItemMedias): boolean => {
  let isUniversal = true

  if (itemMedias.length) {
    const result = UniversalMedia.safeParse(itemMedias[0])
    isUniversal = result.success
  }

  return isUniversal
}
