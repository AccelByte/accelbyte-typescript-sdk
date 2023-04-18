/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const LongBackLinkIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
        <rect width="24" height="24" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.5303 7.46967C10.8232 7.76256 10.8232 8.23744 10.5303 8.53033L7.06066 12L10.5303 15.4697C10.8232 15.7626 10.8232 16.2374 10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303L5.46967 12.5303C5.17678 12.2374 5.17678 11.7626 5.46967 11.4697L9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967Z"
          fill="white"
        />
      </g>
    </svg>
  </i>
)
