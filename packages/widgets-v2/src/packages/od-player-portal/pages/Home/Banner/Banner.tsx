/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { LoadingPage } from '@od-components/components/LoadingPage'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import classNames from 'classnames'
import React, { createRef, useState, useEffect } from 'react'
import { Trans } from 'react-i18next'
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useRoutes } from '~/hooks/routes/useRoutes'
import './Banner.scss'
import { useBanner } from './BannerHooks'
import { BannerLightBox } from './BannerLightBox'
import { BannerPrice } from './BannerPrice'

// TODO: Fix default import error on remix
// Workarround to fix default import on remix because remix transform our widget to cjs
// and return default import UI Library to object instead of function
const ReactLinesEllipsis = typeof LinesEllipsis === 'object' ? (LinesEllipsis as any).default : LinesEllipsis
const ReactSlick = typeof Slider === 'object' ? (Slider as any).default : Slider

const ResponsiveEllipsis = responsiveHOC()(ReactLinesEllipsis)

type BannerSetting = {
  dots: boolean
  infinite: boolean
  speed: number
  slideToShow: number
  slideToScroll: number
  arrows: boolean
  adaptiveHeight: boolean
}

export const Banner = () => {
  const bannerSetting: BannerSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  }

  const [activeBannerIndex, setActiveBannerIndex] = useState<number>(0)
  const { state: bannerState, mutations: bannerMutation } = useBanner()
  const { state: routesState } = useRoutes()
  const sliderRef = createRef<Slider>()
  const { state: userState } = useUserInfo()
  const userCountry = userState.user?.country
  const bannerItemListData = bannerState.bannerItemList && bannerState.bannerItemList.data
  const activeIndex = bannerItemListData ? activeBannerIndex % bannerItemListData.length : 0
  const isFetchingBanner = bannerState.bannerFetchStatus === FetchStatus.FETCHING

  useEffect(() => {
    bannerMutation.fetchBennerItems(userCountry)
  }, [])

  const onClickPrev = () => {
    const node = sliderRef.current
    if (node) node.slickPrev()
    setActiveBannerIndex(activeBannerIndex - 1)
  }

  const onClickNext = () => {
    const node = sliderRef.current
    if (node) node.slickNext()
    setActiveBannerIndex(activeBannerIndex + 1)
  }

  const onChangeBannerItem = (bannerIndex: number) => {
    const node = sliderRef.current
    if (node) node.slickPrev()
    setActiveBannerIndex(bannerIndex)
  }

  return (
    <section className="banner bannerHeight">
      {isFetchingBanner && <LoadingPage className="mt-3 md:mt-7" />}
      {!isFetchingBanner && bannerState.bannerError && (
        <div className="bannerError">
          <div className="errorContainer">
            <CommonError error={bannerState.bannerError} />
          </div>
        </div>
      )}
      {!isFetchingBanner && bannerState.bannerItemList && bannerState.currencyMap && (
        <React.Fragment>
          <div>
            <ReactSlick ref={sliderRef} {...bannerSetting} afterChange={index => onChangeBannerItem(index)}>
              {bannerState.bannerContentList?.map(bannerContent => (
                <div key={bannerContent.bannerItem.itemId} className="bannerHeight">
                  <BannerLightBox mainBackground={bannerContent.mainBackground} />
                  <Link
                    to={ItemHelper.getItemDetailRoute(routesState, bannerContent.bannerItem)}
                    className="bannerItemContainer bannerGradient">
                    <div className="bannerDetail">
                      <p className={classNames('title', OverrideCSS.TITLE_FONT)}>{bannerContent.bannerItem.title}</p>
                      <div className="description">
                        <ResponsiveEllipsis
                          text={bannerContent.bannerItem.description}
                          maxLine={2}
                          ellipsis="..."
                          trimRight
                          basedOn="letters"
                        />
                      </div>
                      <div className="price">
                        {bannerContent.bannerItem.regionData && bannerState.currencyMap && (
                          <BannerPrice regionData={bannerContent.bannerItem.regionData} currencyMap={bannerState.currencyMap} />
                        )}
                      </div>
                      <div className="btn big btn-primary ctaButton">
                        <Trans key="HomePage.banner.learnMore">Learn more</Trans>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </ReactSlick>
          </div>

          {bannerItemListData && bannerItemListData.length > 1 && (
            <React.Fragment>
              <div className="pagination">
                {bannerItemListData.map((game, index) => {
                  if (index !== activeIndex) {
                    return <div key={game.itemId} className="carouselBullet" onClick={() => onChangeBannerItem(index)} />
                  }
                  return <div key={game.itemId} className="carouselBullet active" />
                })}
              </div>
              <button className="bannerHeight arrowLeftButton" onClick={onClickPrev} aria-label="Arrow Left">
                <div className="arrowIconContainer">
                  <ArrowIcon className={ArrowIconStyles.left} />
                </div>
              </button>
              <button className="bannerHeight arrowRightButton" onClick={onClickNext} aria-label="Arrow Right">
                <div className="arrowIconContainer">
                  <ArrowIcon className={ArrowIconStyles.right} />
                </div>
              </button>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </section>
  )
}
