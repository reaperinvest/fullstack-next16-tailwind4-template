// Pure TypeScript — no external imports
export interface User {
  id: string
  name: string | null
  email: string
  role: 'USER' | 'ADMIN'
  createdAt: Date
}

export interface CreateUserInput {
  name?: string
  email: string
  password: string
}
