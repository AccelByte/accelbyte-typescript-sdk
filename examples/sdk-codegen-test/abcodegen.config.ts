import { type CodegenConfigOptions } from '@accelbyte/codegen'

export default {
  overrideAsAny: {
    Bans: true
  },
  shouldProduceIndexFiles: false,
  basePath: '/iam'
} satisfies CodegenConfigOptions
