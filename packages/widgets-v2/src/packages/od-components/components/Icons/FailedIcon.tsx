/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

export const FailedIcon = ({ className }: { className?: string }) => (
  <i className={className}>
    <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 44 44">
      <path fill="#D75A4A" fillRule="evenodd" d="M44 22c0 12.15-9.85 22-22 22S0 34.15 0 22 9.85 0 22 0s22 9.85 22 22z" clipRule="evenodd" />
      <path stroke="#fff" strokeLinecap="round" strokeWidth="2" d="M14.08 29.92l15.84-15.84M14.08 14.08l15.84 15.84" />
    </svg>
  </i>
)
