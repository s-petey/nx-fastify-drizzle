import type { Config } from 'drizzle-kit';

const config: Config = {
  schema: [
    'packages/drizzle-api/drizzle-definitions/src/lib/cities.ts',
    // 'packages/drizzle-definitions/src/lib/**.schema.ts'
    'packages/drizzle-api/drizzle-definitions/src/lib/users.ts',
  ],
  breakpoints: true,
  out: './drizzle',
};

export default config;
