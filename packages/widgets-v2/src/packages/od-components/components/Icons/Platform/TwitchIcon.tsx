/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const TwitchIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="1" width="32" height="32" rx="4" fill="#6441A4" filter="url(#filter0_d)" />
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.125 9L10 11.875V23.625H14V25.75H16.25L18.375 23.625H21.625L26 19.25V9H11.125ZM24.5 18.5L22 21H18L15.875 23.125V21H12.5V10.5H24.5V18.5ZM22 13.375V17.75H20.5V13.375H22ZM18 13.375V17.75H16.5V13.375H18Z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter id="filter0_d" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <clipPath id="clip0">
          <rect width="16" height="16.75" fill="#fff" transform="translate(10 9)" />
        </clipPath>
      </defs>
    </svg>
  </i>
)
