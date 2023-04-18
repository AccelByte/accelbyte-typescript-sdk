/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'

export const ClockIcon = ({ className, size = 16 }: { className?: string; size?: number }) => (
  <i className={classNames(className)}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00065 13.6668C11.1303 13.6668 13.6673 11.1298 13.6673 8.00016C13.6673 4.87055 11.1303 2.3335 8.00065 2.3335C4.87104 2.3335 2.33398 4.87055 2.33398 8.00016C2.33398 11.1298 4.87104 13.6668 8.00065 13.6668ZM8.00065 14.6668C11.6825 14.6668 14.6673 11.6821 14.6673 8.00016C14.6673 4.31826 11.6825 1.3335 8.00065 1.3335C4.31875 1.3335 1.33398 4.31826 1.33398 8.00016C1.33398 11.6821 4.31875 14.6668 8.00065 14.6668Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.5C8.27614 4.5 8.5 4.72386 8.5 5V7.79289L10.3536 9.64645C10.5488 9.84171 10.5488 10.1583 10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536L7.64645 8.35355C7.55268 8.25979 7.5 8.13261 7.5 8V5C7.5 4.72386 7.72386 4.5 8 4.5Z"
        fill="currentColor"
      />
    </svg>
  </i>
)
