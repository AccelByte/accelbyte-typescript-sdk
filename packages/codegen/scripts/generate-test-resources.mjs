// @ts-check
import fs from 'fs/promises'
import path from 'path'

// The objective of this script is so that we could trim down the IAM Swagger.
// We want to test our Swagger parser and generator, in some ways so that we could be sure
// that when we do something, nothing breaks.
//
// And having the entire IAM Swagger JSON might be overkill.
// Hence, wh at we're doing in the `INCLUDED_ENDPOINTS` is that, we want to make sure
// to cover the scenarios. For example, function naming, deprecated endpoints exclusion.
const PATH_TO_IAM_SAMPLE = 'src/helpers/test-resources/swagger-iam-sample.json'

const INCLUDED_ENDPOINTS = [
  // These are deprecated endpoints, should be automatically excluded.
  '/iam/bans',
  '/iam/roles',
  // These are the normal ones.
  '/iam/v3/admin/bans',
  '/iam/v3/admin/roles',
  '/iam/v3/admin/users/me',
  '/iam/v3/public/users/me',
  '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action}',
  // For array definitions test.
  '/iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice'
]

async function main() {
  const content = await fs.readFile(path.join(process.cwd(), PATH_TO_IAM_SAMPLE), 'utf-8')
  const json = JSON.parse(content)

  const newPaths = {}
  const modelsSet = new Set()
  const newDefinitions = {}

  for (const key in json.paths) {
    // Only include the endpoints set above.
    if (INCLUDED_ENDPOINTS.includes(key)) {
      newPaths[key] = json.paths[key]

      for (const methodKey in json.paths[key]) {
        const { parameters = [], responses = {} } = json.paths[key][methodKey]

        // Get the request body schema, if any.
        for (const parameter of parameters) {
          const { schema } = parameter
          if (!schema) continue

          const ref = getEffectiveRef(schema)
          if (ref) modelsSet.add(ref)
        }

        // Get the resposne body schema, if any.
        for (const responseStatus in responses) {
          const { schema } = responses[responseStatus]
          if (!schema) continue

          const ref = getEffectiveRef(schema)
          if (ref) modelsSet.add(ref)
        }
      }
    }
  }

  for (const model of modelsSet) {
    // Recursively add definitions (including definitions inside definitions).
    recursivelyAddToNewDefinitions(newDefinitions, json.definitions, model)
  }

  json.paths = newPaths
  json.definitions = newDefinitions

  // Re-write the old Swagger into the new Swagger.
  await fs.writeFile(PATH_TO_IAM_SAMPLE, JSON.stringify(json, null, 2), 'utf-8')
}

main()

// Helper functions.
function getEffectiveRef(schema) {
  let ref = schema['$ref']
  if (!ref) {
    ref = schema.items?.['$ref']
  }

  return ref?.slice('#/definitions/'.length)
}

function recursivelyAddToNewDefinitions(newDefinitions, definitions, modelName) {
  // Store the definition in the new definitions.
  const currentDefinition = definitions[modelName]
  newDefinitions[modelName] = currentDefinition

  // From the definition, check the properties.
  // See if they have "nested" definitions, so we can traverse them recursively.
  for (const propertyKey in currentDefinition.properties) {
    const propertySchema = currentDefinition.properties[propertyKey]
    const ref = getEffectiveRef(propertySchema)

    if (ref) {
      newDefinitions[ref] = definitions[ref]
      recursivelyAddToNewDefinitions(newDefinitions, definitions, ref)
    }
  }
}
