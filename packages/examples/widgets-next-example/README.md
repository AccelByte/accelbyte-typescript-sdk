# Web Widgets example using Next.js

This is example Next.js app utilizing AGS Starter, showcasing AccelByte Web Widgets and AccelByte Web SDK. The example provides a login page, catalog page, item page and payment page built with the AccelByte Web Widgets.

## Nomenclature:

 - **AGS** - AccelByte Gaming Services
 - **AGS Starter** - AccelByte Gaming Services Starter
 - **AGS Premium** - AccelByte Gaming Services Premium

## How to Run

This folder should be ready to run without any changes as it is pointing to the [AccelByte's demo environment](https://demo.accelbyte.io) by default.

```sh
# Install the dependencies.
yarn # npm install

# Run Nextjs server:
yarn dev # npm run dev
```

Open you browser at [http://localhost:3030](http://localhost:3030) to see the result. The example flow is:

1. Login page
2. Catalog page with the list of items
3. Ability to click and see and purchase an item
4. A Payment page is shown when `Buy Now` button is clicked
5. A Stripe payment station is shown allowing to complete the purchase

 ### Login Page

The Login Page utilizes AccelByte [IAM password login flow](https://docs-preview.accelbyte.io/api-explorer/?api=IAM&path=/iam/v3/oauth/token&method=post) using `Grant Type password`


Note, that the login page does not use Cookie, but a `localStorage`. As such, this being considered a Cross Site Scripting(XSS) vulnerable, a spacial care should be taken when embedding third party JavaScript files, as this may result in third party JS high-jacking the AccelByte `accessToken`. 

##### Login Curl example using `password` Grant Type

**AGS Starter curl:**

    ```shell
    curl --location 'https://foundations.dev.gamingservices.accelbyte.io/iam/v3/oauth/token' \
         --header 'Content-Type: application/x-www-form-urlencoded' \
         --header 'Authorization: Basic ODc0ZjIyNzgzOTg3NDYxMTk0NDZhNjRjNWE4NDdlMWE6' \
         --data-raw 'password=<urlencoded-password>&username=<urlencoded-username>&grant_type=password&client_id=874f2278398746119446a64c5a847e1a'
    ```

**AGS Premium curl:**

    ```shell
    curl --location 'https://demo.accelbyte.io/iam/v3/oauth/token' \
         --header 'Content-Type: application/x-www-form-urlencoded' \
         --header 'Authorization: Basic NzdmODg1MDZiNjE3NGMzZWE0ZDkyNWY1YjQwOTZjZTg6' \
         --data 'password=<urlencoded-password>&username=<urlencoded-username>&grant_type=password&client_id=77f88506b6174c3ea4d925f5b4096ce8'
    ```

When the Login page complete the authentication, the IAM `accessToken` will be stored in browser localStorage, allowing to be utilized for the next pages

### Catalog Page

The Catalog Page utilizes [Platform items endpoint](https://docs-preview.accelbyte.io/api-explorer/?api=Platform%20Store&path=/public/namespaces/{namespace}/items/byCriteria&method=get)

    ```shell
    curl --location 'https://demo.accelbyte.io/platform/public/namespaces/accelbyte/items/byCriteria?itemType=APP&limit=16&offset=0&sortBy=name%253Aasc%252CdisplayOrder%253Aasc' \
    ```

the actual Web Widget example is
```javascript
import { AppStore, StoreWidget } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import React from 'react'

export default function Apps() {
  const router = useRouter()
  const page = router.query.page ? Number(router.query.page) : 1

  return <AppStore page={page} />
}
```


### Payment Page

The Payment Web Widget example is:

```javascript
import React from 'react'
import { PaymentWidget } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import { PlayerPortalRoutes } from '..'

export default function OrderHistoryDetailPage() {
    const router = useRouter()
    const { orderNo } = router.query

    if (!orderNo) {
        return 'Not Found'
    }

    return <PaymentWidget namespace={'foundations'} paymentOrderNo={orderNo as string} redirectPath={PlayerPortalRoutes.home.link} />
}
```

