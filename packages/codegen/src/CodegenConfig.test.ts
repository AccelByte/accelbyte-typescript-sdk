import fs from 'fs'
import os from 'os'
import path from 'path'
import { afterEach, describe, expect, test } from 'vitest'
import { CodegenConfig } from './CodegenConfig'
import { CodeGenerator } from './CodeGenerator'
import swaggersConfig from './helpers/test-resources/swaggersConfig'
import { createTmpMock } from './helpers/test-utils'
import { ParserUtils } from './ParserUtils'

afterEach(() => {
  CodegenConfig.reset()
})

/** Replicate cli.ts aggregate file writing from codegen result. */
function writeAggregateFiles(srcDir: string, indexImports: Set<string>, queryImports: Set<string>) {
  const toExportLine = (p: string) => `export * from '${p.replace('\\', '/')}.js'`
  ParserUtils.writeAllImportsFile(srcDir, [...indexImports].sort().map(toExportLine).join('\n'))
  ParserUtils.writeAllQueryImportsFile(srcDir, [...queryImports].sort().map(toExportLine).join('\n'))
}

describe('CodegenConfig', () => {
  test('no config file — all defaults returned', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      await CodegenConfig.loadConfig(tempDir)
      expect(CodegenConfig.shouldProduceIndexFiles()).toBe(true)
      expect(CodegenConfig.getBasePath()).toBeUndefined()
      expect(CodegenConfig.getOverrideAsAny()).toBeUndefined()
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('config with shouldProduceIndexFiles: false', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      fs.writeFileSync(path.join(tempDir, 'abcodegen.config.ts'), `export default { shouldProduceIndexFiles: false }`)
      await CodegenConfig.loadConfig(tempDir)
      expect(CodegenConfig.shouldProduceIndexFiles()).toBe(false)
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('config with basePath', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      fs.writeFileSync(path.join(tempDir, 'abcodegen.config.ts'), `export default { basePath: '/custom' }`)
      await CodegenConfig.loadConfig(tempDir)
      expect(CodegenConfig.getBasePath()).toBe('/custom')
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('config with overrideAsAny — boolean entries', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      fs.writeFileSync(path.join(tempDir, 'abcodegen.config.ts'), `export default { overrideAsAny: { Bans: true, Ban: false } }`)
      await CodegenConfig.loadConfig(tempDir)
      const override = CodegenConfig.getOverrideAsAny()
      expect(override).toBeDefined()
      expect(override!['Bans']).toBe(true)
      expect(override!['Ban']).toBe(false)
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('config with overrideAsAny — function entry', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      fs.writeFileSync(
        path.join(tempDir, 'abcodegen.config.ts'),
        `export default { overrideAsAny: { Bans: (schema) => !!schema.properties } }`
      )
      await CodegenConfig.loadConfig(tempDir)
      const override = CodegenConfig.getOverrideAsAny()
      expect(override).toBeDefined()
      expect(typeof override!['Bans']).toBe('function')
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('partial config — unset options return defaults', async () => {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'codegen-config-test-'))
    try {
      fs.writeFileSync(path.join(tempDir, 'abcodegen.config.ts'), `export default { basePath: '/api' }`)
      await CodegenConfig.loadConfig(tempDir)
      expect(CodegenConfig.getBasePath()).toBe('/api')
      expect(CodegenConfig.shouldProduceIndexFiles()).toBe(true)
      expect(CodegenConfig.getOverrideAsAny()).toBeUndefined()
    } finally {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  test('default config — generates service index and all required files', async () => {
    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const exists = (file: string) => fs.existsSync(path.join(srcDir, file))
      const read = (file: string) => fs.readFileSync(path.join(srcDir, file), 'utf8')

      // Service index and aggregate files should be present
      expect(exists('Iam.ts')).toBe(true)
      expect(exists('all-imports.ts')).toBe(true)
      expect(exists('all-query-imports.ts')).toBe(true)

      // all-imports.ts re-exports generated code and service index
      const allImports = read('all-imports.ts')
      expect(allImports).toContain('generated-public/')
      expect(allImports).toContain('generated-admin/')
      expect(allImports).toContain('generated-definitions/')
      expect(allImports).toContain('/Iam.js')

      // all-query-imports.ts re-exports query files
      expect(read('all-query-imports.ts')).toContain('.query.js')

      return { indexImports, queryImports }
    })
  })

  test('overrideAsAny: true — generates z.any() for matched definition', async () => {
    CodegenConfig.setConfig({ overrideAsAny: { Bans: true } })

    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const bansFile = fs.readFileSync(path.join(srcDir, 'generated-definitions', 'Bans.ts'), 'utf8')
      expect(bansFile).toContain('z.any()')
      expect(bansFile).not.toContain('z.object')

      // A non-overridden definition should still have its full schema
      const banFile = fs.readFileSync(path.join(srcDir, 'generated-definitions', 'Ban.ts'), 'utf8')
      expect(banFile).not.toContain('z.any()')

      return { indexImports, queryImports }
    })
  })

  test('overrideAsAny: false — does not override matched definition', async () => {
    CodegenConfig.setConfig({ overrideAsAny: { Bans: false } })

    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const bansFile = fs.readFileSync(path.join(srcDir, 'generated-definitions', 'Bans.ts'), 'utf8')
      expect(bansFile).not.toContain('z.any()')
      expect(bansFile).toContain('z.object')

      return { indexImports, queryImports }
    })
  })

  test('overrideAsAny: function — conditionally overrides based on schema', async () => {
    CodegenConfig.setConfig({
      overrideAsAny: {
        // Override Bans because it has a "properties" key in its schema
        Bans: schema => !!schema.properties
      }
    })

    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const bansFile = fs.readFileSync(path.join(srcDir, 'generated-definitions', 'Bans.ts'), 'utf8')
      expect(bansFile).toContain('z.any()')

      return { indexImports, queryImports }
    })
  })

  test('basePath config — generated endpoints use the configured basePath instead of swagger basePath', async () => {
    CodegenConfig.setConfig({ basePath: '/custom' })

    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const bansEndpoint = fs.readFileSync(path.join(srcDir, 'generated-admin', 'endpoints', 'BansAdmin$.ts'), 'utf8')

      // URLs should be prefixed with the configured basePath '/custom'
      expect(bansEndpoint).toContain("'/custom/iam/v3/admin/bans")
      // Without basePath config, URLs start with '/iam/...' directly (no prefix)
      expect(bansEndpoint).not.toContain("'/iam/v3/admin/bans")

      return { indexImports, queryImports }
    })
  })

  test('splitOutputByServiceName: true via config — files generated in service subfolder with correct barrel paths', async () => {
    CodegenConfig.setConfig({ splitOutputByServiceName: true })

    // sdk-iam has serviceName 'iam', so all generated files should land in srcDir/iam/
    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const exists = (p: string) => fs.existsSync(path.join(srcDir, p))
      const read = (p: string) => fs.readFileSync(path.join(srcDir, p), 'utf8')

      // Generated directories must be inside the 'iam' subfolder
      expect(exists('iam/generated-public')).toBe(true)
      expect(exists('iam/generated-admin')).toBe(true)
      expect(exists('iam/generated-definitions')).toBe(true)
      expect(exists('iam/Iam.ts')).toBe(true)

      // Root-level generated directories must NOT exist
      expect(exists('generated-public')).toBe(false)
      expect(exists('generated-admin')).toBe(false)
      expect(exists('generated-definitions')).toBe(false)
      expect(exists('Iam.ts')).toBe(false)

      // Barrel files live at root and import via the 'iam/' prefix
      const allImports = read('all-imports.ts')
      expect(allImports).toContain('./iam/generated-public/')
      expect(allImports).toContain('./iam/generated-admin/')
      expect(allImports).toContain('./iam/generated-definitions/')
      expect(allImports).toContain('./iam/Iam.js')

      expect(read('all-query-imports.ts')).toContain('./iam/')

      return { indexImports, queryImports }
    })
  })

  test('shouldProduceIndexFiles: false — skips service index but keeps all other files', async () => {
    CodegenConfig.setConfig({ shouldProduceIndexFiles: false })

    await createTmpMock('sdk-iam', async srcDir => {
      const { indexImports, queryImports } = await CodeGenerator.main(swaggersConfig['sdk-iam'])
      writeAggregateFiles(srcDir, indexImports, queryImports)

      const exists = (file: string) => fs.existsSync(path.join(srcDir, file))
      const read = (file: string) => fs.readFileSync(path.join(srcDir, file), 'utf8')

      // Service index skipped, aggregate files still present
      expect(exists('Iam.ts')).toBe(false)
      expect(exists('all-imports.ts')).toBe(true)
      expect(exists('all-query-imports.ts')).toBe(true)

      // all-imports.ts has generated code but NOT the service index
      const allImports = read('all-imports.ts')
      expect(allImports).toContain('generated-public/')
      expect(allImports).toContain('generated-admin/')
      expect(allImports).toContain('generated-definitions/')
      expect(allImports).not.toContain('/Iam.js')

      // all-query-imports.ts still has query files
      expect(read('all-query-imports.ts')).toContain('.query.js')

      return { indexImports, queryImports }
    })
  })
})
