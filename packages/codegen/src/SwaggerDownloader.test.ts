import * as fs from 'fs'
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, describe, expect, test, vi } from 'vitest'
import { SwaggerDownloader } from './SwaggerDownloader'

vi.mock('fs', async importOriginal => {
  const actual = await importOriginal<typeof import('fs')>()
  return {
    ...actual,
    existsSync: vi.fn().mockReturnValue(true),
    mkdirSync: vi.fn(),
    writeFileSync: vi.fn(),
    readFile: vi.fn(),
    writeFile: vi.fn()
  }
})

vi.mock('./CliParser', () => ({
  CliParser: {
    getResolvedSwaggersOutputPath: vi.fn().mockReturnValue('/tmp')
  }
}))

const server = setupServer()

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => {
  server.resetHandlers()
  vi.clearAllMocks()
})
afterAll(() => server.close())

describe('SwaggerDownloader', () => {
  test('writes the downloaded swagger response to disk', async () => {
    server.use(http.get('http://localhost:8080/openapi.json', () => HttpResponse.json({ foo: 'bar' })))

    await SwaggerDownloader.downloadFile('test.json', 'http://localhost:8080/openapi.json')

    expect(vi.mocked(fs.writeFileSync)).toHaveBeenCalledWith('/tmp/test.json', JSON.stringify({ foo: 'bar' }, null, 2), 'utf-8')
  })

  test('does not write to disk when the request fails', async () => {
    vi.spyOn(console, 'log').mockImplementation(() => undefined)
    server.use(http.get('http://localhost:8080/openapi.json', () => HttpResponse.error()))

    await SwaggerDownloader.downloadFile('test.json', 'http://localhost:8080/openapi.json')

    expect(vi.mocked(fs.writeFileSync)).not.toHaveBeenCalled()
  })
})
