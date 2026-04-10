import type { User, CreateUserInput } from '@/domain/entities/user'

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>
  findById(id: string): Promise<User | null>
  create(input: CreateUserInput): Promise<User>
  update(id: string, data: Partial<User>): Promise<User>
}
