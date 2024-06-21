/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { BasicCategoryInfoArray } from '../../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../../generated-definitions/FullCategoryInfoArray.js'

export class CategoryAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * This API is used to get root categories.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: root category data&lt;/li&gt;&lt;/ul&gt;
   */
  getCategories(queryParams?: { storeId?: string | null }): Promise<IResponse<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
  }

  /**
   * This API is used to create category.&lt;p&gt;A category is a path separated by &#34;/&#34;. A category also has localized display names. Example:&lt;p&gt;&lt;pre&gt;&lt;code&gt;{ &#34;categoryPath&#34;: &#34;/games&#34;, &#34;localizationDisplayNames&#34;: \{&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created category data&lt;/li&gt;&lt;/ul&gt;
   */
  createCategory(data: CategoryCreate, queryParams: { storeId: string | null }): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
  }

  /**
   * This API is used to list all categories&#39; basic info of a store ordered by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of categories&#39; paths&lt;/li&gt;&lt;/ul&gt;
   */
  getCategoriesBasic(queryParams?: { storeId?: string | null }): Promise<IResponse<BasicCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/basic'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BasicCategoryInfoArray,
      'BasicCategoryInfoArray'
    )
  }

  /**
   * This API is used to delete category by category path. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted category data&lt;/li&gt;&lt;/ul&gt;
   */
  deleteCategory_ByCategoryPath(categoryPath: string, queryParams: { storeId: string | null }): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
  }

  /**
   * This API is used to get category by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: category data&lt;/li&gt;&lt;/ul&gt;
   */
  getCategory_ByCategoryPath(categoryPath: string, queryParams?: { storeId?: string | null }): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
  }

  /**
   * This API is used to update category. &lt;p&gt; The category update data is a category object, example as:&lt;pre&gt;&lt;code&gt;{ &#34;storeId&#34;: &#34;store-id&#34;, &#34;localizationDisplayNames&#34;: {&#34;en&#34; : &#34;Games&#34;} }&lt;/code&gt;&lt;/pre&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the updated category data&lt;/li&gt;&lt;/ul&gt;
   */
  updateCategory_ByCategoryPath(
    categoryPath: string,
    data: CategoryUpdate,
    queryParams: { storeId: string | null }
  ): Promise<IResponse<FullCategoryInfo>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfo, 'FullCategoryInfo')
  }

  /**
   * This API is used to get child categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of child categories data&lt;/li&gt;&lt;/ul&gt;
   */
  getChildren_ByCategoryPath(categoryPath: string, queryParams?: { storeId?: string | null }): Promise<IResponse<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}/children'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
  }

  /**
   * This API is used to get descendant categories by category path.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of descendant categories data&lt;/li&gt;&lt;/ul&gt;
   */
  getDescendants_ByCategoryPath(
    categoryPath: string,
    queryParams?: { storeId?: string | null }
  ): Promise<IResponse<FullCategoryInfoArray>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/platform/admin/namespaces/{namespace}/categories/{categoryPath}/descendants'
      .replace('{namespace}', this.namespace)
      .replace('{categoryPath}', categoryPath)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FullCategoryInfoArray, 'FullCategoryInfoArray')
  }
}
