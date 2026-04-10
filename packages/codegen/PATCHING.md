# Code Generator Patching

This document outlines the steps required when patching an Open API specs.

## JSON Patch

Inside the directory `packages/od-codegen/src/swaggers`, there are also JSON Patch that will patch the Swagger document. The patches will adjust the endpoints so that it will produce the proper functions to match the actual backend service. 
We use https://github.com/Starcounter-Jack/JSON-Patch library that follow https://jsonpatch.com/ format

### Operations

#### Add
```
{ "op": "add", "path": "/biscuits/1", "value": { "name": "Ginger Nut" } }
```
Adds a value to an object or inserts it into an array. In the case of an array, the value is inserted before the given index. The - character can be used instead of an index to insert at the end of an array.

#### Remove
```
{ "op": "remove", "path": "/biscuits" }
```
Removes a value from an object or array.
```
{ "op": "remove", "path": "/biscuits/0" }
```
Removes the first element of the array at biscuits (or just removes the “0” key if biscuits is an object)

#### Replace
```
{ "op": "replace", "path": "/biscuits/0/name", "value": "Chocolate Digestive" }
```
Replaces a value. Equivalent to a “remove” followed by an “add”.

#### Copy
```
{ "op": "copy", "from": "/biscuits/0", "path": "/best_biscuit" }
```
Copies a value from one location to another within the JSON document. Both from and path are JSON Pointers.

#### Move
```
{ "op": "move", "from": "/biscuits", "path": "/cookies" }
```
Moves a value from one location to the other. Both from and path are JSON Pointers.

#### Test
```
{ "op": "test", "path": "/best_biscuit/name", "value": "Choco Leibniz" }
```
Tests that the specified value is set in the document. If the test fails, then the patch as a whole should not apply.

### Example
For example, take a look at the this object
```oauthmodel.TokenResponseV3": {
   "required": [
    "access_token",
    "refresh_token",
    "expires_in",
    "token_type",
    "roles",
    "permissions",
    "bans",
    "user_id",
    "display_name",
    "namespace",
    "namespace_roles",
    "refresh_expires_in",
    "scope",
    "xuid"
   ],
   // ...
}
```

This definition says that `TokenResponseV3` will always give out `xuid`. Yet at the moment, that property shouldn't always appear in the current IAM and the Swagger JSON is mistakenly written that way. If we kept the `xuid` property there, the response validation in the TypeScript SDK will throw error and say the response missed the `xuid` property. Therefore, the JSON Patches are created, and it looks like this

```
  {
    "op": "remove",
    "path": "/definitions/oauthmodel.TokenResponseV3/required/13"
  }
  ```

#### NOTE
Be careful if we want to use remove multiple array the results will be different from what is expected because at the first opportunity it will change the array order

for example the original json:
```
"required": [
  "validateOnly",
  "code",
  "contactType",
  "languageTag"
]
```

what we expect:
```
"required": [
  "code",
  "languageTag"
]
```

patch:
```
{
  "op": "remove",
  "path": "/required/0"
},
{
  "op": "remove",
  "path": "/required/2"
}
```

result:
```
"required": [
  "code",
  "contactType"
]
```

So instead of doing multiple removes on array it's better to use replace operation

patch: 
```
{
  "op": "replace",
  "path": "/required",
  "value": [
    "code",
    "languageTag"
  ]
}
```
