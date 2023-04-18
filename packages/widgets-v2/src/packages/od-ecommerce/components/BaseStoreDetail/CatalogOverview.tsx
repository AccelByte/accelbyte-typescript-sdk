/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import './CatalogOverview.scss'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  item: ItemInfo
}

const MAX_CONTENT_LENGTH = 643

export function CatalogOverview({ item }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const longDescription = item.longDescription || ''
  const showReadMoreButton = (longDescription || '').length > MAX_CONTENT_LENGTH

  return (
    <section className="catalogOverview">
      <h2 className="overviewHeading">
        <Trans i18nKey="CatalogOverview.heading">Overview</Trans>
      </h2>
      <div className="overviewContent">
        {isOpen ? longDescription : longDescription.slice(0, MAX_CONTENT_LENGTH)}
        {!longDescription && (
          <span>
            <Trans i18nKey="CatalogOverview.noContent">No Overview</Trans>
          </span>
        )}
        <div>
          {showReadMoreButton && (
            <button
              onClick={() => {
                setIsOpen(!isOpen)
              }}>
              {isOpen ? (
                <Trans i18nKey="CatalogOverview.readless">Read less</Trans>
              ) : (
                <Trans i18nKey="CatalogOverview.readmore">Read more</Trans>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
