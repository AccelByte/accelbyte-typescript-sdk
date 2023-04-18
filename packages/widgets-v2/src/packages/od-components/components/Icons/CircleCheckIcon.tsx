/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import classNames from 'classnames'
import React from 'react'

const CircleCheckDefaultIcon = ({ className }: { className?: string }) => {
  return (
    <i className={classNames('circleCheckDefaultIcon', className)}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <rect width="16" height="16" fill="rgb(var(--od-rgb-text,0.65))" />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.9987 13.6673C11.1283 13.6673 13.6654 11.1303 13.6654 8.00065C13.6654 4.87104 11.1283 2.33398 7.9987 2.33398C4.86908 2.33398 2.33203 4.87104 2.33203 8.00065C2.33203 11.1303 4.86908 13.6673 7.9987 13.6673ZM7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z"
          fill="rgb(var(--od-rgb-text,0.65))"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6882 5.31246C11.8835 5.50772 11.8835 5.82431 11.6882 6.01957L7.02153 10.6862C6.92244 10.7853 6.78631 10.8383 6.6463 10.8322C6.5063 10.8261 6.37526 10.7616 6.28513 10.6543L4.28513 8.27333C4.10752 8.06188 4.13494 7.74649 4.34638 7.56888C4.55783 7.39127 4.87322 7.41869 5.05083 7.63013L6.70006 9.5935L10.9811 5.31246C11.1764 5.1172 11.4929 5.1172 11.6882 5.31246Z"
          fill="rgb(var(--od-rgb-text,0.65))"
        />
      </svg>
    </i>
  )
}

const CircleCheckCheckedIcon = ({ className }: { className?: string }) => {
  return (
    <i className={classNames('circleCheckCheckedIcon', className)}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <rect width="16" height="16" fill="#06A286" />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.9987 13.6673C11.1283 13.6673 13.6654 11.1303 13.6654 8.00065C13.6654 4.87104 11.1283 2.33398 7.9987 2.33398C4.86908 2.33398 2.33203 4.87104 2.33203 8.00065C2.33203 11.1303 4.86908 13.6673 7.9987 13.6673ZM7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z"
          fill="#06A286"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6882 5.31246C11.8835 5.50772 11.8835 5.82431 11.6882 6.01957L7.02153 10.6862C6.92244 10.7853 6.78631 10.8383 6.6463 10.8322C6.5063 10.8261 6.37526 10.7616 6.28513 10.6543L4.28513 8.27333C4.10752 8.06188 4.13494 7.74649 4.34638 7.56888C4.55783 7.39127 4.87322 7.41869 5.05083 7.63013L6.70006 9.5935L10.9811 5.31246C11.1764 5.1172 11.4929 5.1172 11.6882 5.31246Z"
          fill="#06A286"
        />
      </svg>
    </i>
  )
}

const CircleCheckIconFill = ({ className }: { className?: string }) => {
  return (
    <i className={classNames('circleCheckCheckedIcon', className)}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44 22C44 34.1502 34.1502 44 22 44C9.84984 44 0 34.1502 0 22C0 9.84984 9.84984 0 22 0C34.1502 0 44 9.84984 44 22Z"
          fill="#25AE88"
        />
        <path
          d="M33.4396 13.2002L19.3596 29.0402L10.5596 22.0002"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  )
}

export const CircleCheckIcon = ({
  checked = false,
  fill = false,
  className
}: {
  checked?: boolean
  fill?: boolean
  className?: string
}) => {
  const classNameString = classNames('circleCheckIcon', className)
  switch (true) {
    case checked && fill:
      return <CircleCheckIconFill className={classNameString} />
    case checked:
      return <CircleCheckCheckedIcon className={classNameString} />
    default:
      return <CircleCheckDefaultIcon className={classNameString} />
  }
}
