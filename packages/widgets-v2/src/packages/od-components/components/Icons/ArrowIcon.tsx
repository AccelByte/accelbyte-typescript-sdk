/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'
import styles from './ArrowIcon.module.scss'

export const ArrowIconStyles = {
  left: styles.left,
  right: styles.right,
  up: styles.up,
  down: styles.down
}

export const ArrowIcon = ({ className }: { className?: string }) => (
  <i className={classNames(styles.arrowIcon, 'arrowIcon', className)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </i>
)
