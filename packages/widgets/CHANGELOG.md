### 0.2.0-beta.11 - 2023-04-17

- Bump SDK versions

### 0.2.0-beta.10 - 2023-04-10

- Double loading indicator (left and right) appear in homepage for a sec when user login to PP

### 0.2.0-beta.9 - 2023-03-24

- Cleanup dependencies
- Add namespace and clientId on twitch game config

### 0.2.0-beta.8 - 2023-03-09

- Login Widget Page Failure add react-router to external dependency vite

### 0.2.0-beta.7 - 2023-03-06

- Fix failed npm publish failed to resolve @ant-design/icons

### 0.2.0-beta.6 - 2023-03-06

- Login Widget Page Failure

### 0.2.0-beta.5 - 2023-02-24

- Fix accelbyte-widgets.mjs is not found

### 0.2.0-beta.4 - 2023-02-24

- Fix profile image having hardcoded width

### 0.2.0-beta.3 - 2023-02-24

- Fix SDK not emitting CommonJS bundle as `.cjs` extension

### 0.2.0-beta.2 - 2023-02-23

- Fix Widgets emitting invalid `validator` URL in the bundle

### 0.2.0-beta.1 - 2023-02-22

- Enable tree-shaking in @accelbyte/widgets
- Add "sideEffects": false in package.json

### 0.2.0-beta.0 - 2023-02-21

- Replace moment with date-fns
- CW-2009 - [Playground] Twitch Drop
- [Dev][Playground] Login from Login and Payment Station Widget display Playground inside the preview

### 0.1.1-alpha.68 - 2023-02-14

- Twitch drop integration

### 0.1.1-alpha.67 - 2023-02-14

- Remove `pageConfig` from  `playerPortalConfigs`
- Remove `pathname` and `onHistoryChange` from SdkWidget

### 0.1.1-alpha.66 - 2023-02-13

- Bump and standardize @types/react and @types/react-dom dependencies

### 0.1.1-alpha.65 - 2023-02-09

- Fix process.env is not defined

### 0.1.1-alpha.64 - 2023-02-2

- Fix dependency types/interfaces getting bundled together in the Widgets' `index.d.ts` file
- Implement simplified `widgetOptions` prop in `SdkWidget` component

### 0.1.1-alpha.63 - 2023-02-02

- Expose passing data config from SDK to Widget

### 0.1.1-alpha.62 - 2023-02-01

- Fix build for Widgets because of wrong typings in react-i18next

### 0.1.1-alpha.61 - 2023-01-30

- Bump dependencies versions for security patches

### 0.1.1-alpha.60 - 2023-01-23

- Bump dependencies

### 0.1.1-alpha.59 - 2022-01-11

- Fixed od-shared dependency error

### 0.1.1-alpha.58 - 2022-12-23

- Remove the company logo from all error pages

### 0.1.1-alpha.57 - 2023-01-04

- Fix postbuild script not removing the classname divider

### 0.1.1-alpha.56 - 2023-01-03

- Update dependency versions

### 0.1.1-alpha.55 - 2022-12-30

- Click See my Optionbox after successful transaction, redirect user to hidden page

### 0.1.1-alpha.54 - 2022-12-27

- Remove the company logo from all error pages

### 0.1.1-alpha.53 - 2022-12-22

- Fix wrong fields in package.json being deleted

### 0.1.1-alpha.52 - 2022-12-22

- Make dependencies exist in Widgets when publishing
- Add callback on PaymentWidget when payment is successful

### 0.1.1-alpha.51 - 2022-12-21

- Fix LoginWidget not updating `previousUser` attribute, fix `onUpdateUser` not being able to pass `null`

### 0.1.1-alpha.50 - 2022-12-21

- Update styling on Payment Widget

### 0.1.1-alpha.49 - 2022-12-21

- Disable preflight when building widgets
- Add `onUpdateUser` to LoginWidget's `componentDidMount`

### 0.1.1-alpha.48 - 2022-12-21

- Add `onUpdateUser` to LoginWidget

### 0.1.1-alpha.47 - 2022-12-21

- Add @accelbyte/sdk to the widgets' dependencies

### 0.1.1-alpha.46 - 2022-12-20

- Fix wrong entry point for widgets

### 0.1.1-alpha.45 - 2022-12-19

- Fix built CSS

### 0.1.1-alpha.44 - 2022-12-15

- Fix Checkout payment aggregator integration

### 0.1.1-alpha.43 - 2022-12-09

- Fix peer dependencies

### 0.1.1-alpha.42 - 2022-12-08

- Attempt fix build (1)

### 0.1.1-alpha.41 - 2022-12-02

- Enable versioning of widgets

### 2022-11-30

- Restructure widgets folder

### 2022-11-28

- Create independent Payment Widget and Order page widget

### 2022-11-24

- Publish Web Widgets

### 2022-11-23

- Prettify config files

### 2022-11-21

- Add plain class on every component that use CSS module