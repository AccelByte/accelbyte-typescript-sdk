/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

import BundleItemDetailPage from '@od-ecommerce/pages/Store/BundleItemDetail/BundleItemDetailPage'

interface Props {
  itemId: string
}

export class BundleItemDetailWidget extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { itemId } = this.props

    return (
      <div className="bundleItemDetailWidget">
        <BundleItemDetailPage itemId={itemId} />
      </div>
    )
  }
}
