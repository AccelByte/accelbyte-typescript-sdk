/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const TwitchIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width={32} height={32} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={20} height={20} rx={4} fill="#6441A4" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.70312 5L5 6.79688V14.1406H7.5V15.4688H8.90625L10.2344 14.1406H12.2656L15 11.4062V5H5.70312ZM14.0625 10.9375L12.5 12.5H10L8.67188 13.8281V12.5H6.5625V5.9375H14.0625V10.9375ZM12.5 7.73438V10.4688H11.5625V7.73438H12.5ZM10 7.73438V10.4688H9.0625V7.73438H10Z"
        fill="white"
      />
    </svg>
  </i>
)
