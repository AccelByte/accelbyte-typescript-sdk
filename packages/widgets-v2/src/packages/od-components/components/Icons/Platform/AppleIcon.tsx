/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const AppleIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1165_18162)">
        <rect x="2" y="1" width="32" height="32" rx="2.90909" fill="white" />
        <path
          d="M18.0409 13.0233C18.6917 13.0233 19.5075 12.5794 19.9934 11.9876C20.4334 11.4513 20.7542 10.7023 20.7542 9.95328C20.7542 9.85156 20.745 9.74985 20.7267 9.66663C20.0025 9.69437 19.1317 10.1567 18.6092 10.7763C18.1967 11.2479 17.8209 11.9876 17.8209 12.7459C17.8209 12.8568 17.8392 12.9678 17.8484 13.0048C17.8942 13.014 17.9675 13.0233 18.0409 13.0233ZM15.7492 24.2121C16.6384 24.2121 17.0325 23.611 18.1417 23.611C19.2692 23.611 19.5167 24.1936 20.5067 24.1936C21.4784 24.1936 22.1292 23.2874 22.7434 22.3997C23.4309 21.3825 23.7151 20.3838 23.7334 20.3376C23.6692 20.3191 21.8084 19.5516 21.8084 17.3971C21.8084 15.5292 23.2751 14.6877 23.3576 14.623C22.3859 13.2175 20.91 13.1805 20.5067 13.1805C19.4159 13.1805 18.5267 13.8462 17.9675 13.8462C17.3625 13.8462 16.565 13.2175 15.6209 13.2175C13.8242 13.2175 12 14.7155 12 17.545C12 19.3019 12.6783 21.1606 13.5125 22.3627C14.2275 23.3799 14.8508 24.2121 15.7492 24.2121Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1165_18162"
          x="0.545455"
          y="0.272727"
          width="34.9091"
          height="34.9091"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="0.727273" />
          <feGaussianBlur stdDeviation="0.727273" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1165_18162" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1165_18162" result="shape" />
        </filter>
      </defs>
    </svg>
  </i>
)
