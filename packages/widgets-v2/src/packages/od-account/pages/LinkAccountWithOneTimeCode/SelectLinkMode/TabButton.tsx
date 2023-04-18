/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import classNames from 'classnames'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { TabStyles } from '@od-components/components/Tabs/Tabs'

interface Props {
  isActive: boolean
  onClick: () => void
  label: React.ReactNode
}

export const TabButton = ({ isActive, onClick, label }: Props) => (
  <Button className={classNames(TabStyles.tab, isActive && TabStyles.active)} buttonStyle={ButtonStyle.NONE} onClick={onClick}>
    {label}
  </Button>
)
