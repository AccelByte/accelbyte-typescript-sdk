/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const SteamIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width={32} height={32} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path
          d="M2 5C2 2.79086 3.79086 1 6 1H34C36.2091 1 38 2.79086 38 5V33C38 35.2091 36.2091 37 34 37H6C3.79086 37 2 35.2091 2 33V5Z"
          fill="black"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 2H6C4.34315 2 3 3.34315 3 5V33C3 34.6569 4.34315 36 6 36H34C35.6569 36 37 34.6569 37 33V5C37 3.34315 35.6569 2 34 2ZM6 1C3.79086 1 2 2.79086 2 5V33C2 35.2091 3.79086 37 6 37H34C36.2091 37 38 35.2091 38 33V5C38 2.79086 36.2091 1 34 1H6Z"
          fill="#262626"
        />
      </g>
      <path
        d="M19.9671 9C14.7201 9 10.4171 13.057 10 18.1886L15.3568 20.4035C15.8178 20.0965 16.3666 19.9211 16.9594 19.9211C17.0033 19.9211 17.0692 19.9211 17.1131 19.9211L19.506 16.4561C19.506 16.4342 19.506 16.4342 19.506 16.4123C19.506 14.3289 21.1965 12.6404 23.2821 12.6404C25.3677 12.6404 27.0582 14.3289 27.0582 16.4123C27.0582 18.4956 25.3677 20.1842 23.2821 20.1842C23.2602 20.1842 23.2162 20.1842 23.1943 20.1842L19.7914 22.6184C19.7914 22.6623 19.7914 22.7061 19.7914 22.75C19.7914 24.307 18.5181 25.5789 16.9594 25.5789C15.5982 25.5789 14.4347 24.5921 14.1712 23.2982L10.3513 21.7193C11.5368 25.9079 15.4007 29 19.989 29C25.5214 29 30 24.5263 30 19C30 13.4737 25.4995 9 19.9671 9Z"
        fill="white"
      />
      <path
        d="M16.2787 24.1754L15.0493 23.671C15.2689 24.1316 15.6421 24.5044 16.147 24.7017C17.2228 25.1623 18.4741 24.636 18.9352 23.5614C19.1547 23.0351 19.1547 22.4649 18.9352 21.9386C18.7156 21.4123 18.3204 20.9956 17.7936 20.7763C17.2667 20.557 16.7178 20.5789 16.2348 20.7544L17.5082 21.2807C18.2985 21.6096 18.6937 22.5307 18.3424 23.3202C17.9911 24.1316 17.0691 24.5044 16.2787 24.1754Z"
        fill="white"
      />
      <path
        d="M25.8067 16.4342C25.8067 15.0526 24.6871 13.9122 23.282 13.9122C21.877 13.9122 20.7573 15.0307 20.7573 16.4342C20.7573 17.8377 21.877 18.9561 23.282 18.9561C24.6871 18.9561 25.8067 17.8157 25.8067 16.4342ZM21.394 16.4122C21.394 15.3596 22.2502 14.5263 23.282 14.5263C24.3358 14.5263 25.1701 15.3815 25.1701 16.4122C25.1701 17.4649 24.3139 18.2982 23.282 18.2982C22.2502 18.2982 21.394 17.4649 21.394 16.4122Z"
        fill="white"
      />
      <defs>
        <filter id="filter0_d" x={0} y={0} width={40} height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter id="filter1_d" x={0} y={0} width={40} height={40} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  </i>
)
