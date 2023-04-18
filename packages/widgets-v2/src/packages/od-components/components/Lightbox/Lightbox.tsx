/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getYoutubeEmbedUrl, getYoutubeHqThumbnailUrl } from '@od-components/utils/HtmlUtils'
import { UniversalMedia, UniversalMediaType } from '@od-shared/models/Cms'
import { UniversalMediaHelper } from '@od-shared/utils/UniversalMediaHelper'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { ImageMediumCodec, Medium, MediumCodec, YoutubeVideoMediumCodec } from '@od-medium-serde'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Trans } from 'react-i18next'
import Player from 'react-player'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { ArrowIcon, ArrowIconStyles } from '../Icons/ArrowIcon'
import { CloseIcon } from '../Icons/CloseIcon'
import './Lightbox.scss'

// TODO: Fix default import error on remix
// Workarround to fix default import on remix because remix transform our widget to cjs
// and return default import UI Library to object instead of function
const ReactSlick = typeof Slider === 'object' ? (Slider as any).default : Player
const ReactPlayer = typeof Player === 'object' ? (Player as any).default : Slider

export function getDialogContainer() {
  const modalContainerId = 'lightboxWrapper'
  let element = document.getElementById(modalContainerId)
  if (!element) {
    element = document.createElement('div')
    element.id = modalContainerId
    document.body.appendChild(element)
  }
  return element
}

interface LightboxProps {
  className: string
  isOpen: boolean
  onClose: () => void
  itemMedias?: UniversalMedia[] | Medium[]
  imageUrls?: string[]
  selectedPosition: number
}

interface LightBoxState {
  currentPosition: number
  playingVideo: string | null
}

export class Lightbox extends Component<LightboxProps, LightBoxState> {
  static defaultProps = {
    className: '',
    isOpen: false,
    onClose: () => null,
    currentPosition: 0
  }

  static sliderSetting = {
    dots: false,
    infinite: false,
    speed: 300,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  }

  modalRoot: HTMLElement
  modalContainer: HTMLDivElement
  sliderRef = React.createRef<Slider>()

  constructor(props: LightboxProps) {
    super(props)
    this.modalRoot = getDialogContainer()
    this.modalContainer = document.createElement('div')
    this.state = {
      currentPosition: props.selectedPosition,
      playingVideo: null
    }
  }

  componentDidMount(): void {
    if (!this.modalRoot) return
    this.modalRoot.appendChild(this.modalContainer)

    const { currentPosition } = this.state
    const node = this.sliderRef.current
    if (node) node.slickGoTo(currentPosition, false)
  }

  componentWillUnmount(): void {
    if (!this.modalRoot) return
    this.modalRoot.removeChild(this.modalContainer)
  }

  onClickImageGallery = (position: number) => {
    const node = this.sliderRef.current
    if (node) {
      node.slickGoTo(position)
      this.pauseVideo()
    }
  }

  onClickPrev = () => {
    const node = this.sliderRef.current
    if (node) {
      node.slickPrev()
      this.pauseVideo()
    }
  }

  onClickNext = () => {
    const node = this.sliderRef.current
    if (node) {
      node.slickNext()
      this.pauseVideo()
    }
  }

  pauseVideo = () => this.setState({ playingVideo: null })

  renderSliderContentsItemMedias = () => {
    const { itemMedias } = this.props
    const { playingVideo } = this.state

    if (!Array.isArray(itemMedias) || !itemMedias.length) return null

    if (UniversalMedia.safeParse(itemMedias[0]).success) {
      return (itemMedias as UniversalMedia[]).map(itemMedia => {
        switch (itemMedia.type) {
          case UniversalMediaType.YOUTUBE_VIDEO:
          case UniversalMediaType.URL_VIDEO:
            return (
              <ReactPlayer
                key={itemMedia.content}
                className="lightboxSlideItems"
                controls={true}
                url={itemMedia.content}
                width={'100%'}
                playing={playingVideo === itemMedia.content}
                onPlay={() => this.setState({ playingVideo: itemMedia.content })}
                onPause={this.pauseVideo}
              />
            )
          default:
            return (
              <img key={itemMedia.content} alt={itemMedia.content} src={itemMedia.content} className="lightboxSlideItems" loading="lazy" />
            )
        }
      })
    }

    if (MediumCodec.safeParse(itemMedias[0]).success) {
      return (itemMedias as Medium[]).map((itemMedium, index) => {
        const imageMedium = ImageMediumCodec.safeParse(itemMedium)
        if (imageMedium.success) {
          return (
            <div key={imageMedium.data.value.imageUrl} className="mediumCodecContainer" onClick={() => this.onClickImageGallery(index)}>
              <img src={imageMedium.data.value.imageUrl} className="mediumCodecItem" loading="lazy" />
              {index !== this.state.currentPosition ? <div className="overlayImage" /> : ''}
            </div>
          )
        }
        const youtubeVideoMediumCodec = YoutubeVideoMediumCodec.safeParse(itemMedium)
        if (youtubeVideoMediumCodec.success) {
          return (
            <ReactPlayer
              key={youtubeVideoMediumCodec.data.value.youtubeId}
              className="lightboxSlideItems"
              controls={true}
              url={getYoutubeEmbedUrl(youtubeVideoMediumCodec.data.value.youtubeId)}
              width={'100%'}
              playing={playingVideo === youtubeVideoMediumCodec.data.value.youtubeId}
              onPlay={() => this.setState({ playingVideo: youtubeVideoMediumCodec.data.value.youtubeId })}
              onPause={this.pauseVideo}
            />
          )
        }
        return null
      })
    }

    return null
  }

  renderSliderContentsFromImageUrls = () => {
    const { imageUrls } = this.props
    const { playingVideo } = this.state
    return (
      Array.isArray(imageUrls) &&
      imageUrls.map(imageUrl => {
        if (UrlUtils.isImageURL(imageUrl)) {
          return <img key={imageUrl} src={imageUrl} className="lightboxSlideItems" alt={imageUrl} loading="lazy" />
        }
        return (
          <ReactPlayer
            key={imageUrl}
            className="lightboxSlideItems"
            controls={true}
            url={imageUrl}
            width={'100%'}
            playing={playingVideo === imageUrl}
            onPlay={() => this.setState({ playingVideo: imageUrl })}
            onPause={this.pauseVideo}
          />
        )
      })
    )
  }

  renderGalleryFromItemMedias = () => {
    const { itemMedias } = this.props

    if (!Array.isArray(itemMedias) || !itemMedias.length) return null

    if (UniversalMedia.safeParse(itemMedias[0]).success) {
      return (
        UniversalMedia.safeParse(itemMedias[0]).success &&
        (itemMedias as UniversalMedia[]).map((itemMedia: UniversalMedia, index) => {
          const imageUrl = UniversalMediaHelper.getMediaScreenshot(itemMedia)
          return (
            <div key={index} className="mediaContainer" onClick={() => this.onClickImageGallery(index)}>
              {itemMedia.type === UniversalMediaType.URL_VIDEO && <video src={itemMedia.content} className="mediaItem" />}
              {itemMedia.type !== UniversalMediaType.URL_VIDEO && (
                <img src={imageUrl || defaultItemImage} className="mediaItem" loading="lazy" />
              )}
              {index !== this.state.currentPosition ? <div className="overlayImage" /> : ''}
            </div>
          )
        })
      )
    }

    return (itemMedias as Medium[]).map((itemMedia: Medium, index: number) => {
      let imageSrc = defaultItemImage
      const youtubeVideoMediumCodec = YoutubeVideoMediumCodec.safeParse(itemMedia)
      const imageMediumCoded = ImageMediumCodec.safeParse(itemMedia)
      if (youtubeVideoMediumCodec.success) {
        imageSrc = getYoutubeHqThumbnailUrl(youtubeVideoMediumCodec.data.value.youtubeId)
      } else if (imageMediumCoded.success) {
        imageSrc = imageMediumCoded.data.value.imageUrl
      }
      return (
        <div key={index} className="mediaContainer" onClick={() => this.onClickImageGallery(index)}>
          <img src={imageSrc} className="mediaItem" loading="lazy" />
          {index !== this.state.currentPosition ? <div className="overlayImage" /> : ''}
        </div>
      )
    })
  }

  renderGalleryFromImageUrls = () => {
    const { imageUrls } = this.props
    return (
      Array.isArray(imageUrls) &&
      imageUrls.map((imageUrl, index) => (
        <div key={imageUrl} className="mediaContainer" onClick={() => this.onClickImageGallery(index)}>
          <img src={UniversalMediaHelper.getYoutubeScreenshot(imageUrl) || imageUrl} className="mediaItem" loading="lazy" />
          {index !== this.state.currentPosition ? <div className="overlayImage" /> : ''}
        </div>
      ))
    )
  }

  renderLightbox() {
    const { onClose, className, itemMedias, imageUrls } = this.props
    const { currentPosition } = this.state
    const realCurrenPosition = currentPosition + 1
    const totalImage = Array.isArray(itemMedias) ? itemMedias.length : Array.isArray(imageUrls) ? imageUrls.length : 0
    return (
      <section className={classNames('lightbox', className)}>
        <button
          className="closeButton"
          onClick={() => {
            if (onClose) onClose()
          }}>
          <CloseIcon />
        </button>
        <div className="lightboxContent">
          <div className="lightboxSliderContainer">
            <button className="arrowButtonContainer" onClick={this.onClickPrev}>
              <div className="arrowLeftButton">
                <ArrowIcon className={ArrowIconStyles.left} />
              </div>
            </button>
            <div className="lightboxSlider">
              <ReactSlick
                {...Lightbox.sliderSetting}
                ref={this.sliderRef}
                initialSlide={currentPosition}
                beforeChange={(_current, next) => this.setState({ currentPosition: next })}>
                {this.renderSliderContentsItemMedias() || this.renderSliderContentsFromImageUrls()}
              </ReactSlick>
            </div>
            <button className="arrowButtonContainer" onClick={this.onClickNext}>
              <div className="arrowRightButton">
                <ArrowIcon className={ArrowIconStyles.right} />
              </div>
            </button>
          </div>
          <p className="lightboxCounter">
            <Trans i18nKey="Lightbox.counter">
              {{ realCurrenPosition }} of {{ totalImage }}
            </Trans>
          </p>
          <div className="lightboxGallery">{this.renderGalleryFromItemMedias() || this.renderGalleryFromImageUrls()}</div>
        </div>
      </section>
    )
  }

  renderLightboxOverlay() {
    return <div className="lightboxOverlay">{this.renderLightbox()}</div>
  }

  render() {
    const { isOpen } = this.props
    if (!isOpen) {
      return null
    }
    return ReactDom.createPortal(this.renderLightboxOverlay(), this.modalContainer)
  }
}
