import { capitalize } from '../helpers/utils'

export type Property =
  | { type: 'boolean' }
  | { type: 'string'; format?: 'date-time' }
  | { type: 'integer' }
  | { type: 'array'; items: Property }
  | { type: 'object'; additionalProperties: Property }

export type Definition = {
  properties?: Record<string, Property>
  required?: string[]
  type: 'object'
  'x-pair': string
  'x-tag': string
  'x-type': 'request' | 'response' | 'notification'
}

export type Schema = {
  name: string
  path: string
  definitions: Record<string, Definition>
}

const renderZod = (property: Property) => {
  switch (property.type) {
    case 'string':
      return `z.coerce.string()`

    case 'integer':
      return `z.coerce.number()`

    case 'boolean':
      return `z.boolean()`

    case 'array':
      return `z.array(${renderZod(property.items)})`

    default:
      return `z.any()`
  }
}

const renderProperty = (name: string, type: Definition['x-type'], property: Property, required?: string[]) => {
  const isRequired = required && required.includes(name)

  return `${name}: ${renderZod(property)}${isRequired || type != 'request' ? '' : '.optional()'}`
}

const renderDefinition = (name: string, definition: Definition) => {
  const capitalizedName = capitalize(name)

  if (definition.properties) {
    const properties = Object.entries(definition.properties)

    return `export const ${capitalizedName} = z.object({
  type: z.literal("${name}"),
  ${properties.map(([name, property]) => renderProperty(name, definition['x-type'], property, definition.required)).join(',\n  ')}
})

export type ${capitalizedName} = z.infer<typeof ${capitalizedName}>
`
  }
  return ''
}

const renderAllDefinitions = (definitions: Schema['definitions']) => {
  if (definitions) {
    const definitionEntries = Object.entries(definitions)

    return definitionEntries.map(([name, definition]) => renderDefinition(name, definition)).join('\n\n')
  }
  return ''
}

const renderUnion = (type: Definition['x-type'] | Definition['x-type'][], definitions: Schema['definitions']) => {
  if (definitions) {
    let capitalizedType = ''
    if (typeof type === 'string') {
      capitalizedType = capitalize(type)
    } else {
      capitalizedType = type.map(t => capitalize(t)).join('Or')
    }

    const filteredDefinitions = Object.entries(definitions)
      .filter(([_, def]) => {
        if (typeof type === 'string') {
          return def['x-type'] === type
        } else {
          return type.includes(def['x-type'])
        }
      })
      .map(([name, _]) => capitalize(name))

    return `export const WebSocket${capitalizedType} = z.discriminatedUnion("type", [
  ${filteredDefinitions.join(',\n  ')}
])
  
export type WebSocket${capitalizedType} = z.infer<typeof WebSocket${capitalizedType}>`
  }
  return ''
}

export const templateWebsocketDefinitions = (definitions: Schema['definitions']) => {
  return `/**
 * AUTO GENERATED
 */

import { z } from 'zod'

${renderAllDefinitions(definitions)}

${renderUnion('request', definitions)}

${renderUnion(['response', 'notification'], definitions)}
`
}
