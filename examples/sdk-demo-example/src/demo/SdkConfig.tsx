import React from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'

export function SdkConfig() {
  const { sdk } = useGlobal()

  return (
    <Section>
      <Heading level={2}>SDK config</Heading>

      <SectionContent>
        <p>
          To set up the SDK, click the "Configure SDK" button in the bottom-right corner of the screen. Once configured, the updated
          settings will appear below.
        </p>

        <p>
          You'll need to adjust the <code>baseURL</code>, <code>clientId</code>, <code>namespace</code>, and <code>redirectURI</code> based
          on the IAM client you created.
        </p>

        <ul>
          <li>For AGS Private Cloud, use the IAM client at the Publisher/Game namespace level.</li>
          <li>For AGS Shared Cloud, the IAM client will only be at the Game namespace level.</li>
        </ul>

        <Snippet>{JSON.stringify(sdk.assembly().coreConfig, null, 2)}</Snippet>
      </SectionContent>
    </Section>
  )
}
