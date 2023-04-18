/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  onClickPlay: () => void
  isDisabled?: boolean | false
}

export const PlayButton = (props: Props) => {
  const { onClickPlay, isDisabled } = props
  return (
    <button className="btn big btn-primary text-uppercase" onClick={() => onClickPlay()} disabled={isDisabled}>
      <Trans i18nKey="BaseStoreDetailCatalog.button.play">PLAY</Trans>
    </button>
  )
}
