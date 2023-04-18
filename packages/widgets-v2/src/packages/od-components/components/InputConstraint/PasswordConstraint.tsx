/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import { CircleCheckIcon } from '../Icons/CircleCheckIcon'
import styles from './PasswordConstraint.module.scss'

interface Props {
  className?: string
  descriptions: string[]
}

export const PasswordConstraint = ({ className, descriptions }: Props) => {
  return (
    <div className={classNames(className, styles.passwordValidation)}>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>
            <CircleCheckIcon />
            {`${desc}.`}
          </li>
        ))}
      </ul>
    </div>
  )
}
