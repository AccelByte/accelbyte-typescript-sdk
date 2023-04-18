/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const ClearIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <rect width="16" height="16" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.31319 4.31311C4.50846 4.11785 4.82504 4.11785 5.0203 4.31311L11.687 10.9798C11.8822 11.175 11.8822 11.4916 11.687 11.6869C11.4917 11.8821 11.1751 11.8821 10.9799 11.6869L4.31319 5.02022C4.11793 4.82496 4.11793 4.50837 4.31319 4.31311Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6868 4.31311C11.4915 4.11785 11.175 4.11785 10.9797 4.31311L4.31303 10.9798C4.11777 11.175 4.11777 11.4916 4.31303 11.6869C4.50829 11.8821 4.82488 11.8821 5.02014 11.6869L11.6868 5.02022C11.8821 4.82496 11.8821 4.50837 11.6868 4.31311Z"
          fill="white"
        />
      </g>
    </svg>
  </i>
)
