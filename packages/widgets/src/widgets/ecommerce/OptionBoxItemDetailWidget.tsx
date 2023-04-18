/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

import OptionboxItemDetailPage from '@od-ecommerce/pages/Store/OptionboxItemDetail/OptionboxItemDetailPage'

interface Props {
  itemId: string
}

export class OptionboxItemDetailWidget extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { itemId } = this.props

    return (
      <div className="optionboxItemDetailWidget">
        <OptionboxItemDetailPage itemId={itemId} />
      </div>
    )
  }
}
