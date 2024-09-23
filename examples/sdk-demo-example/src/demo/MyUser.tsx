import { UsersApi } from '@accelbyte/sdk-iam'
import React, { useState } from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'
import { handleError } from './helpers'

export function MyUser() {
  const { setUser, sdk } = useGlobal()
  const [response, setResponse] = useState<any>(null)

  async function MyUser() {
    try {
      const response = await UsersApi(sdk).getUsersMe_v3()
      setResponse(response.data)
      setUser(response.data)
    } catch (err) {
      handleError(err, setResponse)
    }
  }

  return (
    <Section>
      <Heading level={2}>Get current user</Heading>

      <SectionContent>
        <button
          className="rounded-md w-fit bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={MyUser}>
          Get my user information
        </button>

        <Section>
          <Heading level={3}>Response</Heading>

          <Snippet>{JSON.stringify(response, null, 2)}</Snippet>
        </Section>
      </SectionContent>
    </Section>
  )
}
