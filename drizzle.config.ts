import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/schema',
  out: './drizzle',
  dbCredentials: {
    uri: process.env.DATABASE_URL || '',
  },
  driver: 'mysql2',
  strict: false,
  verbose: true,
} satisfies Config
