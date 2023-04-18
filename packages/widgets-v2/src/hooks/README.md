# hooks

Please only use this folder for hooks that are used more than once in the entire Widgets. If the hook is only used once in a particular component, consider co-locating the hook instead, be it in the same file, or in a separate file (for example, if the component name is HelloWorld, then the file name would be HelloWorldHooks.ts, containing a class with hooks as static methods).

## Return Data

Consider using HookDataReturns<T> as the return data type for Hooks. This way, we can receive both the error and data response.

For example:

```
const fetchCountries = useCallback(async (): Promise<HookDataReturns<CountryObjectArray>> => {
  let countries: CountryObjectArray | null = null
  let countriesError: FetchErrorType | null = null

  try {
    setState({ countriesError: null, countriesFetchStatus: FetchStatus.FETCHING })

    const result = await sdk.Basic.Misc().getCountries()
    if (result.error) {
      throw result.error
    }

    countries = result.response.data
    return { data: countries }
  } catch (error) {
    countriesError = WidgetErrorHelper.getErrorType(error)
    return { error: countriesError }
  } finally {
    setState({ countries, countriesError, countriesFetchStatus: FetchStatus.IDLE })
  }
}, [sdk])
```

Here's how to use it on a component:
```
const result = await fetchCountries()
if (result.error) {
  setAlert(result.error)
  return
}
setCountries(result.data)
```