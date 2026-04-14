# AccelByte TypeScript SDK Code Generator

AccelByte Code Generator is a CLI tool that facilitates creating an AccelByte TypeScript SDK from AccelByte OpenAPI definitions.

## Requirements

- **Node.js >= 22.18.0** (LTS) — required for native TypeScript type stripping, used to load `abcodegen.config.ts` at runtime.

## CLI
This codegen build a CLI called `accelbyte-codegen` that will be used to generate code from given config.

```
Commands:
accelbyte-codegen download-swaggers  Download swagger JSON files
accelbyte-codegen generate-code      Generate code from downloaded swagger files

Options:
--version                   Show version number                                                     [boolean]
--config                    Path to the config file with backend service URLs.                      [string] [required]
--swaggersOutput            Directory to save the downloaded Swagger JSON files.                    [string] [required]
--output                    Directory for the generated code. Required for generate-code.           [string]
--help                      Show help                                                               [boolean]
--skipReactQuery            Disable React Query code generation.                                    [boolean]
--snippetOnly               Generate only code snippets.                                            [boolean]
--snippetOutput             Directory for the generated code snippets.                              [string]
--webSocketSchema           Path to the WebSocket schema file (schema.json).                        [string]
```

### Config file
Provide swaggers url you wish to generate, store it in .json format file.

```
[
  ["iam", "Iam", "iam.json", "https://example.com/iam/apidocs/api.json"]
]
```

## How to Generate

**Step 1: Set Up Your Node.js Environment** Make sure you have **Node.js >= 22.18.0** (LTS) and npm (Node Package Manager) installed on your system. You can download and install them from the official website: https://nodejs.org/en/

This minimum version is required because the codegen loads `abcodegen.config.ts` at runtime using Node.js native TypeScript type stripping, which was unflagged in Node.js 22.18.0.

__*It is recommended__ to use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) to install Node.js so you can switch between Node versions more easily

**Step 2: Create a New Node.js Project (if needed)** If you are starting a new project, create a new directory and initialize it as a Node.js project. You can do this using the following commands: 
```
mkdir my-project
cd my-project
npm init
```
Follow the prompts to set up your project's package.json file.

**Step 3: Install the Package** To use `@accelbyte/codegen`, you need to install it as a dependency for your project. Run the following command within your project directory:
```
npm install @accelbyte/codegen
# Or, with yarn:
yarn add @accelbyte/codegen
```
**Step 4: Configure the Package** Check the documentation or the README of the package for specific configuration instructions. 
  1.	Prepare The `CHANGELOG.md` file, create the Changelog file in the root project with `CHANGELOG.md` file name.
  2.	Prepare Config file, Provide the swaggers URL you wish to generate with the format of an Array of array detailed services, so we can add multiple services at the same time, by adding an Array of detailed services into `Config.json` Array like this:
```
[
  [serviceName, aliasName, swaggerFileOutput, swaggerURL],
  [serviceName2, aliasName2, swaggerFileOutput2, swaggerURL2],
  ...
]
```
and then store it in .json format file (we suggest placing the file in the root directory). example:
```
[
  ["iam", "Iam", "iam.json", "https://example.com/iam/apidocs/api.json"]
]
```
for the Accelbyte Demo environment, this will look like this
```
[
  ["iam", "Iam", "iam.json", "https://demo.accelbyte.io/iam/apidocs/api.json"]
]
```

**Step 5: Download Swagger Files** download the swagger file to the project by executing this command
```
npm exec -- accelbyte-codegen download-swaggers --config ./config.json --swaggersOutput ./swaggers
# Or, with yarn:
yarn accelbyte-codegen download-swaggers --config ./config.json --swaggersOutput ./swaggers
```
*note: please adjust the `--config` flag with the path of config.json file that was already set up before, and please specify the swagger output directory by using `--swaggersOutput` flag.

**Step 6: Generate Code from Swagger Files** after the swagger file has already been downloaded we can proceed to generating TypeScript SDK code from the Swagger File using this command : 
```
npm exec -- accelbyte-codegen generate-code --config ./config.json --swaggersOutput ./swaggers --output ./sdk
```
*note: please adjust the `--config` flag with the path of config.json file that was already set up before, and please specify for the swagger output directory by using `--swaggersOutput` flag, and the directory output of generated SDK using `--output` flag.
if it is successful the result will look like this, and the WebSDK code should be generated under the/sdk directory

```
----------
Generating API: { title: 'justice-iam-service', version: '7.4.0' }
!!!! Missing x-version ...
COMPLETED
----------
```

**Step 7: Prettify the files (Optional)** 

To prettify the code file using the prettier tool, please install the plugin first by doing this:
```
npm install prettier 
# Or, with yarn:
yarn add prettier
```
after installing, execute prettier as below
```
npm exec prettier --write swaggers/*.json && prettier --write sdk/**/*
# Or, with yarn:
yarn prettier --write swaggers/*.json && prettier --write sdk/**/*
```

## Configuration

Place an `abcodegen.config.ts` file next to your `swaggers.json` to customize codegen behavior. All options are optional — if the file is absent, defaults apply.

```typescript
// abcodegen.config.ts
import { type CodegenConfigOptions } from '@accelbyte/codegen'

export default {
  // Override the base path prepended to all API routes.
  // Default: uses basePath from the swagger spec.
  basePath: '/custom',

  // Generate barrel index files (index.ts, all-imports.ts, all-query-imports.ts).
  // Default: true
  shouldProduceIndexFiles: false,

  // Force specific definitions to emit `z.any()` instead of a full schema.
  // Keyed by definition file name. Value can be `true` or a function receiving the schema.
  overrideAsAny: {
    ProtobufAny: true,
    SomeOther: (schema) => schema.properties?.['@type'] !== undefined
  },

  // Output each swagger set into a subfolder named after its service name.
  // Default: false
  splitOutputByServiceName: true
} satisfies CodegenConfigOptions
```

### `splitOutputByServiceName`

By default, all swagger sets in `swaggers.json` are generated into the same `--output` directory. When this option is enabled, each set is placed in a subfolder named after its service name (the first element of each inner array).

Given a config like:

```json
[
  ["iam",      "iam",      "iam.json",      "https://example.com/iam/apidocs/api.json"],
  ["platform", "platform", "platform.json", "https://example.com/platform/swagger.json"]
]
```

The output becomes:

```
sdk/
  iam/
    generated-admin/
    generated-public/
    generated-definitions/
    Iam.ts
  platform/
    generated-admin/
    generated-public/
    generated-definitions/
    Platform.ts
  all-imports.ts        ← re-exports from all subfolders
  all-query-imports.ts
```

Enable via `abcodegen.config.ts`:

```typescript
export default {
  splitOutputByServiceName: true
} satisfies CodegenConfigOptions
```

## Design Decisions

### Zod definitions use `interface`, not `type`

Generated definitions use `interface Foo extends z.TypeOf<typeof Foo> {}` rather than a `type` alias. This makes editors display the object shape directly on hover instead of showing the `z.TypeOf<...>` indirection.

This triggers `@typescript-eslint/no-empty-object-type`. That rule guards against the `{}` gotcha in hand-written code, which does not apply to generated output. Consumers can disable it for generated files:

```js
// eslint.config.js
{
  files: ['src/generated-definitions/**'],
  rules: { '@typescript-eslint/no-empty-object-type': 'off' }
}
```

## Troubleshooting

### Type or lint errors in generated files

The generated code aims to use neutral, unopinionated style defaults. However, some generated syntax may conflict with your tsconfig or linter settings. In that case, you can ignore specific lint rules in the codegen folder, or create a `tsconfig.json` inside it to override your top-level configuration.
