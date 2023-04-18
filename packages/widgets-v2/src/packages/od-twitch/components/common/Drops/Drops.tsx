/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Select, SelectProps, SelectOption } from '@od-components/components/Form/Select/Select'
import { Trans } from 'react-i18next'
import { Typography } from '@od-components/components/Typography/Typography'
import './Drops.scss'

export const Drops: React.FC<SelectProps<SelectOption>> = ({ options = [], ...props }) => {
  if (options.length <= 1) {
    return (
      <div className="singleDrop">
        <Typography tag="p" className="gameDisplay">
          {options[0]?.label}
        </Typography>
      </div>
    )
  }

  return (
    <div className="multiDrops">
      <Select
        label={<Trans i18nKey="TwitchDropPage.claim.select.title">Choose a game</Trans>}
        options={options}
        className="selectContainer inputLabel"
        {...props}
      />
    </div>
  )
}
