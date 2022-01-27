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
  frequency: number;
  organisation_id: number;
}

interface DbAssignment {
  id: number;
  task_id: number;
  assigned_to_user_id: number;
  assigned_by_user_id: number | null;
  due_by_utc: string;
  assigned_at_utc: string;
}

interface DbExemption {
  id: number;
  task_id: number;
  user_id: number;
  created_at_utc: string;
}

declare module 'fastify' {
  interface FastifyRequest {
    user: DbUser;
    choreId: number;
  }

  interface FastifyRequestBody {}
}
