/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const GoogleIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <rect x="2" y="1" width="32" height="32" rx="4" fill="white" />
        <rect x="2.5" y="1.5" width="31" height="31" rx="3.5" stroke="#4285F4" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.68 17.1813C25.68 16.614 25.6291 16.0686 25.5345 15.5449H18V18.6395H22.3055C22.12 19.6395 21.5564 20.4867 20.7091 21.054V23.0613H23.2945C24.8073 21.6686 25.68 19.6176 25.68 17.1813Z"
        fill="#4285F4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0007 24.9995C20.1607 24.9995 21.9716 24.2832 23.2952 23.0613L20.7097 21.0541C19.9934 21.5341 19.077 21.8177 18.0007 21.8177C15.917 21.8177 14.1534 20.4104 13.5243 18.5195H10.8516V20.5923C12.1679 23.2068 14.8734 24.9995 18.0007 24.9995Z"
        fill="#34A853"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5236 18.519C13.3636 18.039 13.2727 17.5263 13.2727 16.999C13.2727 16.4717 13.3636 15.959 13.5236 15.479V13.4062H10.8509C10.3091 14.4863 10 15.7081 10 16.999C10 18.2899 10.3091 19.5117 10.8509 20.5917L13.5236 18.519Z"
        fill="#FBBC05"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0007 12.1818C19.1752 12.1818 20.2297 12.5855 21.0588 13.3782L23.3534 11.0836C21.9679 9.79273 20.157 9 18.0007 9C14.8734 9 12.1679 10.7927 10.8516 13.4073L13.5243 15.48C14.1534 13.5891 15.917 12.1818 18.0007 12.1818Z"
        fill="#EA4335"
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
