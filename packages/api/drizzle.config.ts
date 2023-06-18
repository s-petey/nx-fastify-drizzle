import type { Config } from 'drizzle-kit';

const config: Config = {
  schema: 'packages/api/src/database/schema.ts',
  breakpoints: true,
  out: './drizzle',
};

export default config;
