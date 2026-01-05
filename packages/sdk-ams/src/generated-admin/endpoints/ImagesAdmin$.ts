/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { ImageDetails } from '../../generated-definitions/ImageDetails.js'
import { ImageList } from '../../generated-definitions/ImageList.js'
import { ImageStorage } from '../../generated-definitions/ImageStorage.js'
import { ImageUpdate } from '../../generated-definitions/ImageUpdate.js'

export class ImagesAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Returns images which exist (uploaded, uploading, or building) in the linked account. This route fails if no account is linked Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
   */
  getImages(queryParams?: {
    count?: number
    inUse?: string | null
    isProtected?: boolean | null
    name?: string | null
    offset?: number
    sortBy?: string | null
    sortDirection?: string | null
    status?: string | null
    tag?: string | null
  }): Promise<Response<ImageList>> {
    const params = { count: 100, sortBy: 'uploadedAt', sortDirection: 'desc', ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImageList, 'ImageList')
  }
  /**
   * Returns information regarding the account&#39;s usage for images storage including the free tier quota Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
   */
  getImagesStorage(): Promise<Response<ImageStorage>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images-storage'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImageStorage, 'ImageStorage')
  }
  /**
   * Marks an image for deletion. The image will stop being available for fleets and will eventually be deleted. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
   */
  deleteImage_ByImageId(imageID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images/{imageID}'.replace('{namespace}', this.namespace).replace('{imageID}', imageID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ]
   */
  getImage_ByImageId(imageID: string): Promise<Response<ImageDetails>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images/{imageID}'.replace('{namespace}', this.namespace).replace('{imageID}', imageID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImageDetails, 'ImageDetails')
  }
  /**
   * This allows editing of the image name, toggling `IsProtected`, or adding &amp; removal of tags Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [UPDATE]
   */
  patchImage_ByImageId(imageID: string, data: ImageUpdate): Promise<Response<ImageDetails>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images/{imageID}'.replace('{namespace}', this.namespace).replace('{imageID}', imageID)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ImageDetails, 'ImageDetails')
  }
  /**
   * Unmarks an image for deletion. The image will be available for fleets. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE]
   */
  createRestore_ByImageId(imageID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/images/{imageID}/restore'
      .replace('{namespace}', this.namespace)
      .replace('{imageID}', imageID)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
