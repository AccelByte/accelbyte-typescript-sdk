/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { ItemImageTag, ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { ItemHelper as SharedItemHelper } from '@od-shared/utils/ItemHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { CurrencyInfo, ItemInfo } from '@accelbyte/sdk-platform'
import * as React from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './FeaturedGames.scss'
import { FeaturedGamesPrice } from './FeaturedGamesPrice'
import { useRoutes } from '~/hooks/routes/useRoutes'

interface Props {
  currencyMap: Map<string, CurrencyInfo> | null
  gameList: ItemInfo[] | null
}

export const FeaturedGamesItem: React.FC<Props> = (props: Props) => {
  const { gameList, currencyMap } = props
  const { state: routesState } = useRoutes()

  return (
    <div className="featuredGamesItemContainer">
      {gameList &&
        gameList.map(game => {
          const image = SharedItemHelper.getFilteredImageUrlByTag(game.images, ItemImageTag.productCover) || defaultItemImage
          return (
            <Link
              to={ItemHelper.getItemDetailRoute(routesState, game)}
              className="featuredGamesItem"
              style={{
                backgroundImage: `url(${image})`
              }}
              key={game.itemId}>
              <div className="featuredGamesOverlayBackground">
                <div className="featuredGamesContent">
                  {/*
                  TODO CW-1184
                  {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && <SubscriptionImages item={game} />}
                  */}
                  <h2 className="featuredGamesTitle">{game.title}</h2>
                  <div className="featuredGamesPrice">
                    {game && game.regionData && <FeaturedGamesPrice regionData={game.regionData} currencyMap={currencyMap} />}
                  </div>
                </div>

                <div className="featuredGameLearnMoreText">
                  <div className="featuredGameLearnMoreTextContainer">
                    <span className="learnMoreText">
                      <Trans i18nKey="FeaturedGames.learnMore">Learn more</Trans>
                    </span>

                    <ArrowIcon className={classNames(ArrowIconStyles.right, 'arrowSize')} />
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}
