/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ComponentUtils as CU } from '@od-shared/utils/ComponentUtils'
import React from 'react'
import './DeskFooter.scss'

export const DeskFooter = (props: { imageLogo?: string; className?: string }) => {
  const { imageLogo } = props

  return (
    <footer
      className={CU.groupClassNames({
        default: 'footerDesktop',
        className: props.className ?? ''
      })}>
      {imageLogo && <img src={imageLogo} className="imageLogo" loading="lazy" />}
    </footer>
  )
}
