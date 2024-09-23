import { CurrencyApi, ItemApi } from '@accelbyte/sdk-platform'
import React, { useState } from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'
import { handleError } from './helpers'

export function PlatformItems() {
  const { sdk } = useGlobal()

  const [currenciesResponse, setCurrenciesResponse] = useState<any>(null)
  const [platformItemsResponse, setPlatformItemsResponse] = useState<any>(null)

  async function getCurrencies() {
    try {
      const response = await CurrencyApi(sdk).getCurrencies()
      setCurrenciesResponse(response.data)
    } catch (err) {
      handleError(err, setCurrenciesResponse)
    }
  }

  async function getPlatformItems() {
    try {
      const response = await ItemApi(sdk).getItemsByCriteria({})
      setPlatformItemsResponse(response.data)
    } catch (err) {
      handleError(err, setPlatformItemsResponse)
    }
  }

  return (
    <>
      <Section>
        <Heading level={2}>Get currencies</Heading>

        <SectionContent>
          <button
            className="rounded-md w-fit bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={getCurrencies}>
            Get currencies
          </button>

          <Section>
            <Heading level={3}>Response</Heading>

            <Snippet>{JSON.stringify(currenciesResponse, null, 2)}</Snippet>
          </Section>
        </SectionContent>
      </Section>

      <hr />

      <Section>
        <Heading level={2}>Get platform items</Heading>

        <SectionContent>
          <button
            className="rounded-md w-fit bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={getPlatformItems}>
            Get platform items
          </button>

          <Section>
            <Heading level={3}>Response</Heading>

            <Snippet>{JSON.stringify(platformItemsResponse, null, 2)}</Snippet>
          </Section>
        </SectionContent>
      </Section>
    </>
  )
}
