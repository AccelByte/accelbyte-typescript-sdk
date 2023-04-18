# Legal SDK Example using Node.js

## Legal Flow

1. After user Login the PP/Launcher need to get user information that including unsigned legal
2. If there is unsigned legal the PP/Launcher need blocked by Accept Legal Prompt Page
3. After use Accept Legal the PP/Launcher need to refresh user token

## How to Run

This folder should be ready to run without any changes as it is pointing to the [AccelByte's demo environment](https://demo.accelbyte.io) by default.

```sh
# Install the dependencies.
yarn install

# Run the examples:
yarn example
```

After running either `yarn example` you should see the responses in your terminal.

```ts
// sample Policy object
{
  policyName: 'Legal new policy', 
  policyType: 'Legal Document',
  namespace: 'accelbyte',
  countryCode: 'BG',
  baseUrls: [
    'https://cdn.development.accelbyte.io/'
  ],
  policyVersions: [ .. ],
  policyId: '83efa334-a925-41ae-b3f5-672af915bcd5',
  isMandatory: true,
  isAccepted: false
}
```