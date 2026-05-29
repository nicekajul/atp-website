import { type SchemaTypeDefinition } from 'sanity'
import { bookType } from './book'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bookType],
}
