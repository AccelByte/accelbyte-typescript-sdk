/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const FacebookIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="1" width="32" height="32" rx="4" fill="#4267B2" filter="url(#filter0_d)" />
      <path
        d="M25.1172 9H10.8828C10.6486 9 10.4241 9.093 10.2586 9.25855C10.093 9.4241 10 9.64864 10 9.88276V24.1172C10 24.3514 10.093 24.5759 10.2586 24.7414C10.4241 24.907 10.6486 25 10.8828 25H18.5517V18.8124H16.469V16.3903H18.5517V14.6083C18.5517 12.5421 19.8152 11.4166 21.6579 11.4166C22.2789 11.4152 22.8995 11.4465 23.5172 11.5103V13.6703H22.2483C21.2441 13.6703 21.0483 14.1448 21.0483 14.8455V16.3876H23.4483L23.1366 18.8097H21.0345V25H25.1172C25.3514 25 25.5759 24.907 25.7414 24.7414C25.907 24.5759 26 24.3514 26 24.1172V9.88276C26 9.64864 25.907 9.4241 25.7414 9.25855C25.5759 9.093 25.3514 9 25.1172 9V9Z"
        fill="#fff"
      />
      <path
        d="M21.0343 24.9995V18.8119H23.1225L23.4343 16.3899H21.0343V14.8478C21.0343 14.1471 21.2301 13.6726 22.2343 13.6726H23.517V11.5099C22.8984 11.4459 22.2769 11.4146 21.655 11.4161C19.8094 11.4161 18.5515 12.5416 18.5515 14.6078V16.3899H16.4688V18.8119H18.5515V24.9995H21.0343Z"
        fill="#4267B2"
      />
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
      </defs>
    </svg>
  </i>
)
