---
'@accelbyte/sdk': major
'@accelbyte/sdk-achievement': major
'@accelbyte/sdk-ams': major
'@accelbyte/sdk-audit': major
'@accelbyte/sdk-basic': major
'@accelbyte/sdk-buildinfo': major
'@accelbyte/sdk-challenge': major
'@accelbyte/sdk-chat': major
'@accelbyte/sdk-cloudsave': major
'@accelbyte/sdk-config': major
'@accelbyte/sdk-differ': major
'@accelbyte/sdk-dsmcontroller': major
'@accelbyte/sdk-event': major
'@accelbyte/sdk-gametelemetry': major
'@accelbyte/sdk-gdpr': major
'@accelbyte/sdk-groups': major
'@accelbyte/sdk-iam': major
'@accelbyte/sdk-inventory': major
'@accelbyte/sdk-leaderboard': major
'@accelbyte/sdk-legal': major
'@accelbyte/sdk-lobby': major
'@accelbyte/sdk-matchmaking': major
'@accelbyte/sdk-matchmaking-v1': major
'@accelbyte/sdk-platform': major
'@accelbyte/sdk-qosmanager': major
'@accelbyte/sdk-reporting': major
'@accelbyte/sdk-seasonpass': major
'@accelbyte/sdk-session': major
'@accelbyte/sdk-sessionbrowser': major
'@accelbyte/sdk-sessionhistory': major
'@accelbyte/sdk-social': major
'@accelbyte/sdk-ugc': major
'@accelbyte/error-translator': patch
'@accelbyte/validator': patch
---

AGS TypeScript SDK

- SDK Initialization: The SDK now requires two separate fields: `coreConfig` and `axiosConfig` for initialization, instead of a single options object. This change was made to clearly separate concerns between core SDK configurations and Axios-specific configurations, improving clarity and flexibility.
- Return Response: API function calls now return `{ data, headers, status }` instead of just `data`.
- Event Listeners: Event listeners (e.g., `onSessionExpired`) have been replaced by Axios interceptors.
- Interceptors: Moving event listeners to interceptors improves customization, allowing consumers to handle events and errors through the Axios interceptor rather than relying on SDK-specific events.
- Token Repository: Allow tokens to be attached in SDK and rename `refreshTokens` method to `setToken` for Extend compatibilty.
- API Classes and Methods: Fix redundant API Classes name and inaccurate methods name.
- Generated React Query: Optionally access AGS using react-query for better server-state management.