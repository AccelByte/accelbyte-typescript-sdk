/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { test, chromium, Browser, Page } from '@playwright/test'
import { Configs } from './TestUtils.ts'
import { CurrencyInfo } from '@accelbyte/sdk/generated-public/platform/definitions/CurrencyInfo.js'

test.describe('Vite App', () => {
  let browser: Browser
  let page: Page

  test.beforeAll(async () => {
    // Launch a new browser instance
    browser = await chromium.launch()
  })

  test.afterAll(async () => {
    // Close the browser instance
    await browser.close()
  })

  test.beforeEach(async () => {
    // Create a new page
    page = await browser.newPage()
    await page.goto(`http://localhost:3030`)
  })

  test.afterEach(async () => {
    // Close the page
    await page.close()
  })

  test('loads successfully', async () => {
    const pageTitle = await page.title()
    test.expect(pageTitle).toBeTruthy()
  })

  test(`Check if SDK is working - listDiscoveryConfigs`, async () => {
    const response = await page.waitForSelector('#tooglelistDiscoveryConfigs')
    await response.click()
    const responseItem = await page.waitForSelector('#listDiscoveryConfigs')
    const content = await responseItem.innerHTML()
    test.expect(Configs.safeParse(JSON.parse(content).response.data).success).toBe(true)
  })

  test(`Check if SDK is working - listOfCurrencies`, async () => {
    const response = await page.waitForSelector('#tooglelistOfCurrencies')
    await response.click()
    const responseItem = await page.waitForSelector('#listOfCurrencies')
    const content = await responseItem.innerHTML()
    test.expect(CurrencyInfo.safeParse(JSON.parse(content).response.data[0]).success).toBe(true)
  })
})
