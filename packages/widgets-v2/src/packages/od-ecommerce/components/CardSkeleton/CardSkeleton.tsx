/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemPlaceholder } from '@od-components/components/ItemPlaceholder/ItemPlaceholder'
import React from 'react'
import './CardSkeleton.scss'

interface ICardSkeletonProps {
  numberOfCards?: number
}

export const CardSkeleton = ({ numberOfCards = 8 }: ICardSkeletonProps): React.ReactElement => {
  return (
    <>
      {Array.from(new Array(numberOfCards)).map((_, idx) => (
        <div className="storeGridItem" key={idx}>
          <div className="skeletonContainer" />
          <div className="title w-max">
            <ItemPlaceholder />
          </div>
          <div className="paymentOptions -mb-5 w-max">
            <ItemPlaceholder />
          </div>
        </div>
      ))}
    </>
  )
}
