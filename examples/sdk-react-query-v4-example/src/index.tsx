import { AccelByte } from '@accelbyte/sdk'
import { useCurrencyApi_GetCurrencies } from '@accelbyte/sdk-platform/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom'

const queryClient = new QueryClient()

export const BASE_SDK_CORE_CONFIG = {
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : 'https://prod.gamingservices.accelbyte.io',
  clientId: import.meta.env.VITE_CLIENT_ID,
  namespace: import.meta.env.VITE_NAMESPACE,
  redirectURI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000'
}

const sdk = AccelByte.SDK({ coreConfig: BASE_SDK_CORE_CONFIG })

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
  const { isPending, error, data, isFetching } = useCurrencyApi_GetCurrencies(sdk, {})

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  )
}

const rootElement = document.getElementById('root') as HTMLElement
ReactDOM.render(<App />, rootElement)
