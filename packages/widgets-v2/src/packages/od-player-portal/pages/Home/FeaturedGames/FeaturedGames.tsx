/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { CurrencyInfo, ItemInfo } from '@accelbyte/sdk-platform'
import React, { Fragment, useEffect } from 'react'
import './FeaturedGames.scss'
import { FeaturedGamesItem } from './FeaturedGamesItem'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useFeaturedGames } from './FeaturedGamesHooks'
import { FetchStatus } from '~/constants/fetch-statuses'

export const FeaturedGames = () => {
  const { state: userState } = useUserInfo()
  const userCountry = userState.user?.country
  const { state: featuredGameState, mutations: featuredGameMutations } = useFeaturedGames()
  const isFetching = featuredGameState.featuredGameFetchStatus === FetchStatus.FETCHING
  const error = featuredGameState.featuredGameError
  const featuredGameListData = featuredGameState.featuredGameList?.data
  const maxGameListLength = 4

  useEffect(() => {
    featuredGameMutations.fetchFeaturedGames(userCountry)
  }, [])

  return (
    <section className="featuredGames">
      {!isFetching && error && (
        <div className="errorContainer">
          <CommonError error={error} />
        </div>
      )}

      {!isFetching && !!featuredGameListData && (
        <React.Fragment>
          {(() => {
            if (featuredGameListData.length >= maxGameListLength) {
              return <ManyFeaturedGameItem gameList={featuredGameListData} currencyMap={featuredGameState.currencyMap} />
            }
            return <FeaturedGamesItem gameList={featuredGameListData} currencyMap={featuredGameState.currencyMap} />
          })()}
        </React.Fragment>
      )}
    </section>
  )
}

// ts-unused-exports:disable-next-line
export const ManyFeaturedGameItem = ({
  gameList,
  currencyMap
}: {
  gameList: ItemInfo[]
  currencyMap: Map<string, CurrencyInfo> | null
}) => (
  <Fragment>
    <FeaturedGamesItem gameList={gameList.slice(0, 2)} currencyMap={currencyMap} />
    <FeaturedGamesItem gameList={gameList.slice(2)} currencyMap={currencyMap} />
  </Fragment>
)
