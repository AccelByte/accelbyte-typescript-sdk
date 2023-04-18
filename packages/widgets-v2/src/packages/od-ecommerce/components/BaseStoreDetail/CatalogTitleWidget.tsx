/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import './CatalogTitleWidget.scss'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  item: ItemInfo
  children?: React.ReactNode
  tag?: string | null
}

export const CatalogTitleWidget = (props: Props) => {
  return (
    <div className="catalogTitleWidget">
      {props.tag && <span className="tag">{props.tag}</span>}
      <h2 className="title">{props.item.title}</h2>
      {props.children}
    </div>
  )
}
