/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const SteamIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <rect x="2" y="1" width="32" height="32" rx="4" fill="black" />
        <rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#262626" />
      </g>
      <path
        d="M17.9707 8.11108C13.3067 8.11108 9.48186 11.7173 9.11108 16.2787L13.8726 18.2475C14.2824 17.9746 14.7703 17.8187 15.2972 17.8187C15.3362 17.8187 15.3948 17.8187 15.4338 17.8187L17.5609 14.7388C17.5609 14.7193 17.5609 14.7193 17.5609 14.6998C17.5609 12.8479 19.0635 11.347 20.9174 11.347C22.7713 11.347 24.2739 12.8479 24.2739 14.6998C24.2739 16.5516 22.7713 18.0526 20.9174 18.0526C20.8979 18.0526 20.8589 18.0526 20.8393 18.0526L17.8146 20.2163C17.8146 20.2553 17.8146 20.2943 17.8146 20.3333C17.8146 21.7173 16.6827 22.8479 15.2972 22.8479C14.0873 22.8479 13.053 21.9707 12.8189 20.8206L9.42332 19.4171C10.4771 23.1403 13.9117 25.8889 17.9902 25.8889C22.9079 25.8889 26.8889 21.9123 26.8889 17C26.8889 12.0877 22.8884 8.11108 17.9707 8.11108Z"
        fill="white"
      />
      <path
        d="M14.6914 21.6L13.5986 21.1517C13.7938 21.561 14.1255 21.8924 14.5744 22.0679C15.5306 22.4772 16.6429 22.0094 17.0527 21.0542C17.2479 20.5864 17.2479 20.0796 17.0527 19.6117C16.8576 19.1439 16.5063 18.7735 16.038 18.5786C15.5696 18.3836 15.0817 18.4031 14.6524 18.5591L15.7843 19.0269C16.4868 19.3193 16.8381 20.138 16.5258 20.8398C16.2136 21.561 15.394 21.8924 14.6914 21.6Z"
        fill="white"
      />
      <path
        d="M23.1617 14.7189C23.1617 13.4908 22.1664 12.4772 20.9175 12.4772C19.6686 12.4772 18.6733 13.4713 18.6733 14.7189C18.6733 15.9665 19.6686 16.9606 20.9175 16.9606C22.1664 16.9606 23.1617 15.947 23.1617 14.7189ZM19.2393 14.6994C19.2393 13.7637 20.0003 13.023 20.9175 13.023C21.8542 13.023 22.5958 13.7832 22.5958 14.6994C22.5958 15.6351 21.8347 16.3758 20.9175 16.3758C20.0003 16.3758 19.2393 15.6351 19.2393 14.6994Z"
        fill="white"
      />
      <defs>
        <filter id="filter0_d" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  </i>
)
