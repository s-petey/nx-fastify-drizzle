import type { Config } from 'drizzle-kit';

const config: Config = {
  schema: [
    'packages/sql-definitions/src/lib/cities.ts',
    // 'packages/sql-definitions/src/lib/**.schema.ts'
    'packages/sql-definitions/src/lib/users.ts',
  ],
  breakpoints: true,
  out: './drizzle',
};

export default config;
