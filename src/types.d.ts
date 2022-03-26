export interface User extends Pick<DbUser, 'id'> {}

interface Assignment extends DbAssignment {}

interface DbUser {
  id: number;
  name: string;
  email: string;
  created_at_utc: string;
  is_admin: boolean;
  rota_order: number;
  organisation_id: number;
}

interface DbTask {
  id: number;
  title: string;
  frequency: number | null;
  preferred_time: numer | null;
  organisation_id: number;
  subtasks: string[] | null;
}

interface DbAssignment {
  id: number;
  task_id: number;
  assigned_to_user_id: number;
  assigned_by_user_id: number | null;
  due_by_utc: string | null;
  assigned_at_utc: string;
}

interface DbExemption {
  id: number;
  task_id: number;
  user_id: number;
  created_at_utc: string;
}

interface DbGrocery {
  id: number;
  name: string;
  organisation_id: number;
  created_at_utc: string;
}

type Grocery = Pick<DbGrocery, 'id' | 'name'>;

interface DbMapData {
  id: number;
  data: string;
  organisation_id: string;
}

type MapData = Pick<DbMapData, 'id' | 'data'>;

declare module 'fastify' {
  interface FastifyRequest {
    user: DbUser;
    choreId: number;
  }

  interface FastifyRequestBody {}
}
