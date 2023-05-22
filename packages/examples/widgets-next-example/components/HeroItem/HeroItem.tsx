/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import styles from './HeroItem.module.css'
import { Image as ImageProps } from '@accelbyte/sdk-platform'
import Image from 'next/image'

interface Props {
  images: ImageProps[] | null
}

export const HeroItem = ({ images }: Props) => {
  const getBannerHero = (images: ImageProps[]) => {
    return images.find(image => image.as === 'product-icon')?.imageUrl
  }

  return (
    <>
      <div className={styles.heroItem}>
        {images && getBannerHero(images) ? (
          <img src={getBannerHero(images)} alt="" />
        ) : (
          <Image src="/noImage.jpg" width={900} height={400} alt="no image" />
        )}
      </div>
      <div className={styles.heroCarousel}>
        {images &&
          images.map((image, i) => {
            if (image.as !== 'screenshot') return null
            return <img key={i} src={image.imageUrl} alt="carousel image" />
          })}
      </div>
    </>
  )
}
