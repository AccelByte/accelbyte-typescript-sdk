/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const UserIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <rect width="20" height="20" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0001 8.74998C11.1507 8.74998 12.0834 7.81724 12.0834 6.66665C12.0834 5.51605 11.1507 4.58331 10.0001 4.58331C8.84949 4.58331 7.91675 5.51605 7.91675 6.66665C7.91675 7.81724 8.84949 8.74998 10.0001 8.74998ZM10.0001 9.99998C11.841 9.99998 13.3334 8.50759 13.3334 6.66665C13.3334 4.8257 11.841 3.33331 10.0001 3.33331C8.15913 3.33331 6.66675 4.8257 6.66675 6.66665C6.66675 8.50759 8.15913 9.99998 10.0001 9.99998Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.03601 12.7382C4.85945 13.0325 4.79175 13.413 4.79175 13.6667V16.6667C4.79175 17.0119 4.51193 17.2917 4.16675 17.2917C3.82157 17.2917 3.54175 17.0119 3.54175 16.6667V13.6667C3.54175 13.2537 3.64072 12.6342 3.96415 12.0951C4.30717 11.5234 4.91105 11.0417 5.83341 11.0417H14.1667C14.5707 11.0417 15.1394 11.1811 15.617 11.5938C16.1173 12.026 16.4584 12.7068 16.4584 13.6667V16.6667C16.4584 17.0119 16.1786 17.2917 15.8334 17.2917C15.4882 17.2917 15.2084 17.0119 15.2084 16.6667V13.6667C15.2084 13.0266 14.994 12.7074 14.7998 12.5396C14.583 12.3523 14.3184 12.2917 14.1667 12.2917H5.83341C5.42245 12.2917 5.193 12.4766 5.03601 12.7382Z"
          fill="white"
        />
      </g>
    </svg>
  </i>
)
