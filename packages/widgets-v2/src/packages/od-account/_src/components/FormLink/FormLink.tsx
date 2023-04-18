/*
 *
 *  * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved.
 *  * This is licensed software from AccelByte Inc, for limitations
 *  * and restrictions contact your company contract manager.
 *
 */

import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './FormLink.module.scss'

interface Props {
  linkText: React.ReactNode
  linkTo: string
  promptText?: React.ReactNode
  dataQa?: string | null
}

export const FormLink = ({ promptText, linkTo, linkText, dataQa }: Props) => {
  return (
    <div className={Styles.formLinkContainer}>
      <div className={Styles.promptText}>{promptText}</div>
      <div data-qa-id={dataQa}>
        <Link to={linkTo}>{linkText}</Link>
      </div>
    </div>
  )
}
