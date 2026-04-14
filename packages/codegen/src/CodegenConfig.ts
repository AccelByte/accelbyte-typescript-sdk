/*
 * Copyright (c) 2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import fs from 'fs'
import path from 'path'
import { pathToFileURL } from 'url'

export interface CodegenConfigOptions {
  /**
   * Force specific definitions to emit `z.any()` instead of a full schema.
   * Keyed by definition file name. Value can be `true` or a function receiving the schema.
   *
   * @example
   * { ProtobufAny: true, SomeOther: (schema) => schema.properties?.['@type'] !== undefined }
   */
  overrideAsAny?: Record<string, boolean | ((schema: Record<string, any>) => boolean)>
  /**
   * Generate barrel index files (index.ts, all-imports.ts, all-query-imports.ts).
   * @default true
   */
  shouldProduceIndexFiles?: boolean
  /**
   * Override the base path prepended to all API routes.
   * @default `basePath` from the swagger spec
   */
  basePath?: string
  /**
   * When enabled, each swagger set is generated into a subfolder named after its service name
   * inside the output directory, instead of all sets sharing the same root output folder.
   *
   * If swaggers.json contains [["a", "b", "c", "d"]], then the service name is the "a".
   *
   * @default false
   */
  splitOutputByServiceName?: boolean
}

export class CodegenConfig {
  private static config: CodegenConfigOptions = {}

  static async loadConfig(configDir: string): Promise<void> {
    const configPath = path.join(configDir, 'abcodegen.config.ts')

    if (!fs.existsSync(configPath)) {
      CodegenConfig.config = {}
      return
    }

    const loaded = await import(pathToFileURL(configPath).href)
    CodegenConfig.config = loaded.default ?? loaded ?? {}
  }

  static shouldProduceIndexFiles(): boolean {
    return CodegenConfig.config.shouldProduceIndexFiles ?? true
  }

  static getBasePath(): string | undefined {
    return CodegenConfig.config.basePath
  }

  static getOverrideAsAny(): CodegenConfigOptions['overrideAsAny'] | undefined {
    return CodegenConfig.config.overrideAsAny
  }

  static splitOutputByServiceName(): boolean {
    return CodegenConfig.config.splitOutputByServiceName ?? false
  }

  /** Reset to defaults — used for testing */
  static reset(): void {
    CodegenConfig.config = {}
  }

  /** Set config directly — used for testing */
  static setConfig(config: CodegenConfigOptions): void {
    CodegenConfig.config = config
  }
}
