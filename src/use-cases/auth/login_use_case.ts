import type { UserRepository } from '@/domain/interfaces/user_repository'
import type { User } from '@/domain/entities/user'
import bcrypt from 'bcryptjs'

// Application Layer — orchestrates domain logic, no Prisma/DB knowledge
export class LoginUseCase {
  constructor(private userRepo: UserRepository) {}

  async execute(email: string, password: string): Promise<User | null> {
    const user = await this.userRepo.findByEmail(email)
    if (!user) return null

    const isValid = await bcrypt.compare(password, (user as any).password)
    return isValid ? user : null
  }
}
