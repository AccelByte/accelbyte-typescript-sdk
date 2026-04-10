---
paths: 
  - '**/*.test.ts'
  - '**/*.test.tsx'
---

## Mocking

- Only mock things that are absurdly complex to test (e.g. third-party library).
- For SDK functions that call endpoints, use `msw` to mock the endpoints, so it can be used per test granularly.

## JSX

ALWAYS USE JSX if the file is of `.tsx` extension. Do not use `createElement`.