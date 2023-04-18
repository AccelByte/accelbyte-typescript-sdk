/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import './AdditionalDetail.scss'
import { AppInfo } from '@accelbyte/sdk-platform'

interface Props {
  additionalAppInfo: AppInfo
}

export const AdditionalDetail = (props: Props) => {
  const { additionalAppInfo } = props
  const { platforms, releaseDate, primaryGenre, genres, developer, publisher, websiteUrl, forumUrl } = additionalAppInfo

  if (!platforms && !releaseDate && !genres && !developer && !publisher && !websiteUrl && !forumUrl) {
    return null
  }

  return (
    <div className="gameDetailInfo">
      <ul>
        {platforms && platforms.length > 0 && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.platform">Platform</Trans>
            </h2>
            <p className="infoContent">{platforms.join(', ')}</p>
          </li>
        )}
        {releaseDate && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.releaseDate">Release Date</Trans>
            </h2>
            <p className="infoContent">
              <Trans i18nKey="GameDetailViewPage.detailInfo.releaseDateValue">{{ releaseDate: new Date(releaseDate) }}</Trans>
            </p>
          </li>
        )}
        {primaryGenre && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.primaryGenre">Primary Genre</Trans>
            </h2>
            <p className="infoContent">{primaryGenre}</p>
          </li>
        )}
        {genres && genres.length > 0 && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.genre">Genre</Trans>
            </h2>
            <p className="infoContent">{genres.join(', ')}</p>
          </li>
        )}
        {developer && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.developer">Developer</Trans>
            </h2>
            <p className="infoContent">{developer}</p>
          </li>
        )}
        {publisher && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.publisher">Publisher</Trans>
            </h2>
            <p className="infoContent">{publisher}</p>
          </li>
        )}
        {websiteUrl && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.websiteUrl">Website URL</Trans>
            </h2>
            <p className="infoContent">{websiteUrl}</p>
          </li>
        )}
        {forumUrl && (
          <li className="infoWrapper">
            <h2 className="infoTitle">
              <Trans i18nKey="GameDetailViewPage.detailInfo.forumUrl">Forum URL</Trans>
            </h2>
            <p className="infoContent">{forumUrl}</p>
          </li>
        )}
      </ul>
    </div>
  )
}
