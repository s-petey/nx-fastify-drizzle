import { CitiesTable } from './lib/cities';
import { UsersTable } from './lib/users';
import type { Cities, CitiesInsert, CitiesUpdate } from './lib/cities';
import type { Users, UsersInsert, UsersUpdate } from './lib/users';

export interface Database {
  users: UsersTable;
  cities: CitiesTable;
}

export type {
  Cities,
  CitiesInsert,
  CitiesUpdate,
  Users,
  UsersInsert,
  UsersUpdate,
};

export * from './helpers';
